package ru.corp_portal.corp_portal_core.service.impl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.corp_portal.corp_portal_core.entities.Department;
import ru.corp_portal.corp_portal_core.exceptions.EntityNotFoundException;
import ru.corp_portal.corp_portal_core.repository.DepartmentRepository;
import ru.corp_portal.corp_portal_core.service.DepartmentService;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private final DepartmentRepository departmentRepository;

    @Override
    public Department getDepartment(Integer id) {
        return departmentRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Department with id " + id + " not found")
        );
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public void getThreeDepartments() {
        /**
         * Получить древовидную структуру подразделения
         * все родительские подразделения имеют null в качестве родителя
         * 1. выбрать все родительские подразделения
         * 2. по кажому родительскому подразделению выписать всех детей
         * 3. к каждому ребенку применить пункт 2, пока не закончатся дети
         */
    }

    @Override
    @Transactional
    public Department save(Department department) {
        Department saved = departmentRepository.save(department);

        if (department.getParent() != null) {
            department.getParent().getChildren().add(department);
            departmentRepository.save(department.getParent());
        }

        return saved;
    }

    @Override
    @Transactional
    public Department update(Integer id, Department department) {
        Department existDepartment = getDepartment(id);

        if (department.getParent() != null && !department.getParent().equals(existDepartment.getParent())) {
            existDepartment.getParent().getChildren().remove(department);
            departmentRepository.save(existDepartment.getParent());
            department.getParent().getChildren().add(existDepartment);
            departmentRepository.save(department.getParent());
            existDepartment.setParent(department.getParent());
        }

        existDepartment.setName(department.getName());
        existDepartment.setDescription(department.getDescription());
        existDepartment.setParentSystemID(department.getParentSystemID());
        existDepartment.setCompany(department.getCompany());

        return departmentRepository.save(existDepartment);
    }

    @Override
    public void delete(Integer id) {
        departmentRepository.deleteById(id);
    }
}
