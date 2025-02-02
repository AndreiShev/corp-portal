package ru.corp_portal.corp_portal_core.mapper;

import org.springframework.stereotype.Component;
import ru.corp_portal.corp_portal_core.dto.Response.CompanyResponseList;
import ru.corp_portal.corp_portal_core.dto.insert.CompanyInsert;
import ru.corp_portal.corp_portal_core.dto.Response.CompanyResponse;
import ru.corp_portal.corp_portal_core.dto.update.CompanyUpdate;
import ru.corp_portal.corp_portal_core.entities.Company;

import java.util.ArrayList;
import java.util.List;

@Component
public class CompanyMapper {

    public Company insertToCompany(CompanyInsert insert) {
        Company company = new Company();
        company.setName(insert.getName());
        company.setSubsidiaryCompany(insert.getSubsidiaryCompany());

        return company;
    }

    public CompanyResponse companyToResponse(Company company) {
        CompanyResponse companyResponse = new CompanyResponse();
        companyResponse.setName(company.getName());
        companyResponse.setSubsidiaryCompany(company.getSubsidiaryCompany());

        return companyResponse;
    }

    public Company updateToCompany(CompanyUpdate update) {
        Company company = new Company();
        company.setName(update.getName());
        company.setSubsidiaryCompany(update.getSubsidiaryCompany());

        return company;
    }

    public CompanyResponseList listCompanyToResponse(List<Company> companyList) {
        List<CompanyResponse> companyResponseList = new ArrayList<>();
        for (Company company : companyList) {
            companyResponseList.add(companyToResponse(company));
        }

        return new CompanyResponseList(companyResponseList);
    }
}
