package ru.corp_portal.corp_portal_core.dto.update;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class EmployeeUpdate {
    private String id;

    private String firstName;

    private String lastName;

    private String secondName;

    private String email;
}
