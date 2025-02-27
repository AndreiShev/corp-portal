--liquibase formatted sql
--changeset author:andrei_shev
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM core_schema.department


CREATE TABLE core_schema.department (
                                        company_id int4 NULL,
                                        id int4 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
                                        parent_id int4 NULL,
                                        parent_system_id int4 NULL,
                                        description varchar(1000) NULL,
                                        "name" varchar(254) NULL,
                                        CONSTRAINT department_pkey PRIMARY KEY (id)
);