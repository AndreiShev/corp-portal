package ru.corp_portal.corp_portal_core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.corp_portal.corp_portal_core.entities.Department;

import java.util.Optional;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

    @Override
    Optional<Department> findById(Integer id);

    @Query(value = "select get_json_department(:item_id);", nativeQuery = true)
    String findCarsAfterYear(@Param("item_id") Integer item_id);
}
