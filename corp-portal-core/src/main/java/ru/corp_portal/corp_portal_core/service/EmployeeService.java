package ru.corp_portal.corp_portal_core.service;
import com.fasterxml.jackson.databind.JsonNode;
import ru.corp_portal.corp_portal_core.entities.Employee;


import java.util.List;
import java.util.UUID;

public interface  EmployeeService {
    Employee getEmployee(UUID id);

    List<Employee> getEmployees();

    Employee save(Employee employee);

    Employee update(Employee employee);

    Employee patch(UUID id, JsonNode patch);

    void delete(UUID id);
}
