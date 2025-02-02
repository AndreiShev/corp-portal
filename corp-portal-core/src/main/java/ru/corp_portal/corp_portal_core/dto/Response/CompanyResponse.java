package ru.corp_portal.corp_portal_core.dto.Response;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class CompanyResponse {

    private String name;

    private Boolean subsidiaryCompany;
}
