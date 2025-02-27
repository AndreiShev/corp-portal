package ru.corp_portal.corp_portal_core.dto.Response;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class EmployeeResponse {
    private String id;

    private String firstName;

    private String lastName;

    private String secondName;

    private String email;

    private String company;

    private String department;
}
