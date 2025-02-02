package ru.corp_portal.corp_portal_core.dto.insert;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class CompanyInsert {

    private String name;

    private Boolean subsidiaryCompany;
}
