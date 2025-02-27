package ru.corp_portal.corp_portal_core.dto.shortDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CompanyShortDto {
    private Integer id;

    private String name;
}
