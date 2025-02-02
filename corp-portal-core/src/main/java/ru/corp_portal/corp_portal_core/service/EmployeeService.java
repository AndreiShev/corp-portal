package ru.corp_portal.corp_portal_core.service;
import ru.corp_portal.corp_portal_core.entities.Employee;


import java.util.List;
import java.util.UUID;

public interface  EmployeeService {
    Employee getEmployee(UUID id);

    List<Employee> getEmployees();

    Employee save(Employee employee);

    Employee update(Employee employee);

    void delete(UUID id);
}
