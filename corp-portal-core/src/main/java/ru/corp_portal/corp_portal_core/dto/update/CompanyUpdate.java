package ru.corp_portal.corp_portal_core.dto.update;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class CompanyUpdate {
    private String name;

    private Boolean subsidiaryCompany;
}
