package ru.corp_portal.corp_portal_core.mapper;


import org.springframework.stereotype.Component;
import ru.corp_portal.corp_portal_core.dto.EmployeeInsert;
import ru.corp_portal.corp_portal_core.dto.Response.EmployeeResponse;
import ru.corp_portal.corp_portal_core.entities.Employee;

@Component
public class EmployeeMapper {

    public Employee insertToEmployee(EmployeeInsert insert) {
        Employee employee = new Employee();
        employee.setFirstName(insert.getFirstName());
        employee.setLastName(insert.getLastName());
        employee.setEmail(insert.getEmail());
        employee.setSecondName(insert.getSecondName());

        return employee;
    }

    public EmployeeResponse getResponseFromEmployee(Employee employee) {
        EmployeeResponse employeeResponse = new EmployeeResponse();
        employeeResponse.setFirstName(employee.getFirstName());
        employeeResponse.setLastName(employee.getLastName());
        employeeResponse.setEmail(employee.getEmail());
        employeeResponse.setSecondName(employee.getSecondName());
        employeeResponse.setId(employee.getId().toString());

        return employeeResponse;
    }
}
