--liquibase formatted sql
--changeset liquibase-docs:insert-data
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 select count(*) from (select pg_get_functiondef('f_item_tree_all()'::regprocedure)) as t

create or replace function f_item_tree_all()
    returns jsonb
    language sql stable parallel safe
as
$$
select jsonb_agg(sub)
from (
         select d.id, d.name, f_item_tree(d.id) as children
         from (select *
               from core_schema.department as dsub
               where dsub.parent_id is null) as d
     ) as sub
$$;


--liquibase formatted sql
--changeset liquibase-docs:insert-data
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 select count(*) from (select pg_get_functiondef('get_json_all_department()'::regprocedure)) as t
CREATE OR REPLACE FUNCTION get_json_all_department()
    RETURNS JSONB
    LANGUAGE plpgsql STABLE PARALLEL SAFE AS

$$
DECLARE
    first_json JSONB;
BEGIN
    first_json := f_item_tree_all();
    RETURN jsonb_strip_nulls(first_json);
END;

$$;