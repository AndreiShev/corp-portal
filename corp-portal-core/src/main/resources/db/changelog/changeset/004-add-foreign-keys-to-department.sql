--liquibase formatted sql
--changeset liquibase-docs:insert-data
--preconditions onFail:CONTINUE onError:CONTINUE
--precondition-sql-check expectedResult:0 SELECT count(con.*) FROM pg_catalog.pg_constraint con INNER JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid INNER JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace WHERE nsp.nspname = 'core_schema' AND rel.relname = 'employee' and con.conname = 'foreign_key_department_company';

ALTER TABLE core_schema.department ADD CONSTRAINT foreign_key_department_company FOREIGN KEY (company_id) REFERENCES core_schema.company(id);


