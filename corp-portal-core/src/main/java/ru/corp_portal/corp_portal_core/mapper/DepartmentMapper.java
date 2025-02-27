package ru.corp_portal.corp_portal_core.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ru.corp_portal.corp_portal_core.dto.Response.DepartmentResponse;
import ru.corp_portal.corp_portal_core.dto.Response.DepartmentResponseList;
import ru.corp_portal.corp_portal_core.dto.insert.DepartmentInsert;
import ru.corp_portal.corp_portal_core.dto.shortDto.DepartmentShortDto;
import ru.corp_portal.corp_portal_core.dto.update.DepartmentUpdate;
import ru.corp_portal.corp_portal_core.entities.Department;
import ru.corp_portal.corp_portal_core.service.CompanyService;
import ru.corp_portal.corp_portal_core.service.DepartmentService;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DepartmentMapper {
    private final CompanyService companyService;
    private final DepartmentService departmentService;

    public Department insertToDepartment(DepartmentInsert departmentInsert) {
        Department department = new Department();
        department.setName(departmentInsert.getName());
        department.setDescription(departmentInsert.getDescription());
        department.setCompany(companyService.getCompany(departmentInsert.getCompany()));
        department.setParentSystemID(departmentInsert.getParentSystemID());
        if (departmentInsert.getParent() != null) {
            department.setParent(departmentService.getDepartment(departmentInsert.getParent()));
        }

        return department;
    }

    public DepartmentResponse departmentToResponse(Department department) {
        DepartmentResponse departmentResponse = new DepartmentResponse();
        departmentResponse.setCompany(department.getCompany().getId());
        departmentResponse.setDescription(department.getDescription());
        departmentResponse.setName(department.getName());
        departmentResponse.setParentSystemID(department.getParentSystemID());

        if (department.getParent() != null) {
            departmentResponse.setParent(department.getParent().getId());
        }

        return departmentResponse;
    }

    public Department updateToDepartment(DepartmentUpdate departmentUpdate) {
        Department department = new Department();
        department.setName(departmentUpdate.getName());
        department.setDescription(departmentUpdate.getDescription());
        department.setCompany(companyService.getCompany(departmentUpdate.getCompany()));
        department.setParentSystemID(departmentUpdate.getParentSystemID());

        if (departmentUpdate.getParent() != null) {
            department.setParent(departmentService.getDepartment(departmentUpdate.getParent()));
        }

        return department;
    }

    public DepartmentResponseList listDepartmentsToResponse(List<Department> departments) {
        List<DepartmentResponse> departmentResponses = new ArrayList<>();
        for (Department department: departments) {
            departmentResponses.add(departmentToResponse(department));
        }

        return new DepartmentResponseList(departmentResponses);
    }

    public DepartmentShortDto getShortDtoFromDepartment(Department department) {
        DepartmentShortDto departmentShortDto = new DepartmentShortDto();

        if (department == null) {
            return departmentShortDto;
        }

        departmentShortDto.setId(department.getId());
        departmentShortDto.setName(department.getName());

        return departmentShortDto;
    }
}
