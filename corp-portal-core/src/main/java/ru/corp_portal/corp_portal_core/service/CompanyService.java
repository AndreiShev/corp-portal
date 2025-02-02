package ru.corp_portal.corp_portal_core.service;

import ru.corp_portal.corp_portal_core.entities.Company;

import java.util.List;

public interface CompanyService {
    Company getCompany(Integer id);

    List<Company> getAllCompanies();

    Company save(Company company);

    Company update(Integer id, Company company);

    void delete(Integer id);
}
