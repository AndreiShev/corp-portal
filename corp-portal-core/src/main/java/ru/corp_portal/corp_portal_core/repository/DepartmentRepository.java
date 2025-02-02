package ru.corp_portal.corp_portal_core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.corp_portal.corp_portal_core.entities.Department;

import java.util.Optional;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

    @Override
    Optional<Department> findById(Integer id);
}
