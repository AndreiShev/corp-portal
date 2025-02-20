package ru.corp_portal.corp_portal_core.mapper;


import org.springframework.stereotype.Component;
import ru.corp_portal.corp_portal_core.dto.Response.EmployeeResponseList;
import ru.corp_portal.corp_portal_core.dto.insert.EmployeeInsert;
import ru.corp_portal.corp_portal_core.dto.Response.EmployeeResponse;
import ru.corp_portal.corp_portal_core.dto.update.EmployeeUpdate;
import ru.corp_portal.corp_portal_core.entities.Employee;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

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

    public EmployeeResponseList getEmployeeResponseList(List<Employee> employees) {
        ArrayList<EmployeeResponse> result = new ArrayList<EmployeeResponse>();

        for (Employee employee : employees) {
            result.add(getResponseFromEmployee(employee));
        }

        return new EmployeeResponseList(result);
    }

    public Employee getEmployeeFromUpdate(EmployeeUpdate update) {
        Employee employee = new Employee();
        employee.setId(UUID.fromString(update.getId()));
        employee.setFirstName(update.getFirstName());
        employee.setLastName(update.getLastName());
        employee.setEmail(update.getEmail());
        employee.setSecondName(update.getSecondName());

        return employee;
    }
}
