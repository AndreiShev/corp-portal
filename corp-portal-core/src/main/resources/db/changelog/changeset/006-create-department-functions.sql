--liquibase formatted sql
--changeset liquibase-docs:insert-data
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 select count(*) from (select pg_get_functiondef('f_item_tree(int)'::regprocedure)) as t


create or replace function f_item_tree(item_id int)
    returns jsonb
    language sql stable parallel safe
as
$$
select jsonb_agg(sub)
from (
         select d.id, d.name, f_item_tree(d.id)
         from core_schema.department d
         where d.parent_id = item_id
     ) as sub
$$;


--liquibase formatted sql
--changeset author:andrei_shev
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 select count(*) from (select pg_get_functiondef('get_json_department(int)'::regprocedure)) as t

CREATE OR REPLACE FUNCTION get_json_department(item_id INT)
    RETURNS JSONB
    LANGUAGE plpgsql STABLE PARALLEL SAFE AS

$$
DECLARE
    first_json JSONB;
BEGIN
    first_json := f_item_tree(item_id);
    RETURN jsonb_strip_nulls(first_json);
END;

$$;