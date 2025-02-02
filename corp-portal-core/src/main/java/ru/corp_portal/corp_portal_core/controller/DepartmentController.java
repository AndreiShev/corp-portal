package ru.corp_portal.corp_portal_core.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.corp_portal.corp_portal_core.dto.Response.DepartmentResponse;
import ru.corp_portal.corp_portal_core.dto.Response.DepartmentResponseList;
import ru.corp_portal.corp_portal_core.dto.insert.DepartmentInsert;
import ru.corp_portal.corp_portal_core.dto.update.DepartmentUpdate;
import ru.corp_portal.corp_portal_core.entities.Department;
import ru.corp_portal.corp_portal_core.mapper.DepartmentMapper;
import ru.corp_portal.corp_portal_core.service.DepartmentService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/department")
@RequiredArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;
    private final DepartmentMapper departmentMapper;

    @GetMapping("/")
    public ResponseEntity<DepartmentResponseList> getAll() {
        return ResponseEntity.ok().body(departmentMapper.listDepartmentsToResponse(departmentService.getAllDepartments()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DepartmentResponse> getById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok().body(
                departmentMapper.departmentToResponse(departmentService.getDepartment(id))
        );
    }

    @PostMapping("/")
    public ResponseEntity<DepartmentResponse> create(@RequestBody DepartmentInsert insert) {
        return ResponseEntity.ok().body(
                departmentMapper.departmentToResponse(
                        departmentService.save(departmentMapper.insertToDepartment(insert))
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepartmentResponse> update(@PathVariable("id") Integer id,
                                                     @RequestBody DepartmentUpdate update) {
        return ResponseEntity.ok().body(
                departmentMapper.departmentToResponse(
                        departmentService.update(id, departmentMapper.updateToDepartment(update))
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        departmentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
