package ru.corp_portal.corp_portal_core.service.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.corp_portal.corp_portal_core.entities.Employee;
import ru.corp_portal.corp_portal_core.exceptions.EntityNotFoundException;
import ru.corp_portal.corp_portal_core.repository.EmployeeRepository;
import ru.corp_portal.corp_portal_core.service.EmployeeService;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    private final ObjectMapper objectMapper;

    @Override
    public Employee getEmployee(UUID id) {
        return employeeRepository.getEmployeeById(id).orElseThrow(
                () -> new EntityNotFoundException("Employee with id " + id + " not found")
        );
    }

    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee update(Employee employee) {
        Employee existEmployee = getEmployee(employee.getId());
        existEmployee.setFirstName(employee.getFirstName());
        existEmployee.setLastName(employee.getLastName());
        existEmployee.setEmail(employee.getEmail());
        existEmployee.setSecondName(employee.getSecondName());

        return employeeRepository.save(existEmployee);
    }

    @Override
    public Employee patch(UUID id, JsonNode patch) {
        Employee employee = getEmployee(id);

        try {
            Employee patchedUser = objectMapper.readerForUpdating(employee).readValue(patch);
            return employeeRepository.save(patchedUser);
        } catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Failed to apply patch", ex);
        }
    }

    @Override
    public void delete(UUID id) {
        employeeRepository.deleteById(id);
    }
}
