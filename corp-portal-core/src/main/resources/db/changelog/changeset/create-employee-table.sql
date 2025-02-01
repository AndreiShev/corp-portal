--liquibase formatted sql
--changeset liquibase-docs:insert-data
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM auth_schema.employee

CREATE TABLE core_schema.employee (
                                      id uuid NOT NULL,
                                      email varchar(254) NULL,
                                      first_name varchar(100) NULL,
                                      last_name varchar(100) NULL,
                                      second_name varchar(100) NULL,
                                      CONSTRAINT employee_pkey PRIMARY KEY (id)
);