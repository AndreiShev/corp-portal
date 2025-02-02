package ru.corp_portal.corp_portal_core.dto.update;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class DepartmentUpdate {
    private String name;

    private String description;

    private Integer parentSystemID;

    private Integer company;

    private Integer parent;
}
