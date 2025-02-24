package ru.corp_portal.corp_portal_core.service.impl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.corp_portal.corp_portal_core.entities.Company;
import ru.corp_portal.corp_portal_core.entities.Department;
import ru.corp_portal.corp_portal_core.exceptions.EntityNotFoundException;
import ru.corp_portal.corp_portal_core.repository.CompanyRepository;
import ru.corp_portal.corp_portal_core.service.CompanyService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;


    @Override
    public Company getCompany(Integer id) {
        return companyRepository.getCompanyById(id).orElseThrow(
                () -> new EntityNotFoundException("Company with id " + id + " not found")
        );
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company save(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public Company update(Integer id, Company company) {
        Company existingCompany = getCompany(id);
        existingCompany.setName(company.getName());
        existingCompany.setSubsidiaryCompany(company.getSubsidiaryCompany());

        return companyRepository.save(existingCompany);
    }

    @Override
    public void delete(Integer id) {
        companyRepository.deleteById(id);
    }
}
