package ru.corp_portal.corp_portal_core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.corp_portal.corp_portal_core.entities.Employee;

import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, UUID> {
    Employee getEmployeeById(UUID id);
}
