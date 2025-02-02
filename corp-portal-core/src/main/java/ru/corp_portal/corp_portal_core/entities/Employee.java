package ru.corp_portal.corp_portal_core.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Table
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID Id;

    @Column(name = "first_name", columnDefinition = "VARCHAR(100)")
    private String firstName;

    @Column(name = "last_name", columnDefinition = "VARCHAR(100)")
    private String lastName;

    @Column(name = "second_name", columnDefinition = "VARCHAR(100)")
    private String secondName;

    @Column(columnDefinition = "VARCHAR(254)", unique = true)
    private String email;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;


}
