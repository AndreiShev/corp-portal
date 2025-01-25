package ru.corp_portal.corp_portal_core.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class EmployeeInsert {
    private String firstName;

    private String lastName;

    private String secondName;

    private String email;
}
