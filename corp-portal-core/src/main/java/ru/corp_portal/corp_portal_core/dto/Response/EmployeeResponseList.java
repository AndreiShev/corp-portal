package ru.corp_portal.corp_portal_core.dto.Response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EmployeeResponseList {
    List<EmployeeResponse> employeeResponses;
}
