package ru.corp_portal.corp_portal_core.service;

import ru.corp_portal.corp_portal_core.entities.Department;

import java.util.List;

public interface DepartmentService {
    Department getDepartment(Integer id);

    List<Department> getAllDepartments();

    Department save(Department department);

    Department update(Integer id, Department department);

    void delete(Integer id);
}
