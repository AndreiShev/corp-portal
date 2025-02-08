--liquibase formatted sql
--changeset author:andrei_shev
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM core_schema.employee

CREATE TABLE employee (
                                      id uuid NOT NULL,
                                      email varchar(254) NULL,
                                      first_name varchar(100) NULL,
                                      last_name varchar(100) NULL,
                                      second_name varchar(100) NULL,
                                      CONSTRAINT employee_pkey PRIMARY KEY (id)
);