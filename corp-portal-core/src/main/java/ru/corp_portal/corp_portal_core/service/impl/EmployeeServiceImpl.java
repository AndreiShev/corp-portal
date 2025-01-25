package ru.corp_portal.corp_portal_core.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.corp_portal.corp_portal_core.entities.Employee;
import ru.corp_portal.corp_portal_core.repository.EmployeeRepository;
import ru.corp_portal.corp_portal_core.service.EmployeeService;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public Employee getEmployee(UUID id) {
        return employeeRepository.getEmployeeById(id);
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}
