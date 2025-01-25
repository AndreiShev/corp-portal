package ru.corp_portal.corp_portal_core.service;
import ru.corp_portal.corp_portal_core.entities.Employee;


import java.util.UUID;

public interface  EmployeeService {
    Employee getEmployee(UUID id);

    Employee saveEmployee(Employee employee);
}
