package ru.corp_portal.corp_portal_core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.corp_portal.corp_portal_core.entities.Company;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    Optional<Company> getCompanyById(Integer id);
}
