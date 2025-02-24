package ru.corp_portal.corp_portal_core.service;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import ru.corp_portal.corp_portal_core.entities.Department;

import java.util.List;

public interface DepartmentService {
    Department getDepartment(Integer id);

    List<Department> getAllDepartments();

    Department save(Department department);

    Department update(Integer id, Department department);

    void delete(Integer id);

    JSONArray getThreeDepartments(Integer parent_id);

    JSONArray getThreeAllDepartments();
}
