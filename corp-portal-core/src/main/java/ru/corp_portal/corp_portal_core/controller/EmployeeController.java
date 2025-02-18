package ru.corp_portal.corp_portal_core.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.corp_portal.corp_portal_core.dto.insert.EmployeeInsert;
import ru.corp_portal.corp_portal_core.dto.Response.EmployeeResponse;
import ru.corp_portal.corp_portal_core.entities.Employee;
import ru.corp_portal.corp_portal_core.mapper.EmployeeMapper;
import ru.corp_portal.corp_portal_core.service.EmployeeService;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/employee")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    private final EmployeeService employeeService;
    private final EmployeeMapper employeeMapper;

    @GetMapping(value="/{employeeId}")
    public ResponseEntity<EmployeeResponse> getEmployee(
            @PathVariable("employeeId") String employeeId) {
        Employee employee = employeeService.getEmployee(UUID.fromString(employeeId));
        return ResponseEntity.ok().body(employeeMapper.getResponseFromEmployee(employee));
    }

    @PostMapping
    public ResponseEntity<EmployeeResponse> addEmployee(@RequestBody EmployeeInsert insert) {
        return ResponseEntity.ok().body(employeeMapper
                .getResponseFromEmployee(employeeService
                        .save(employeeMapper.insertToEmployee(insert))));
    }


}
