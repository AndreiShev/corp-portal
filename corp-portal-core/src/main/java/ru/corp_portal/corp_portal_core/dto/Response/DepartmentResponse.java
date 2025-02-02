package ru.corp_portal.corp_portal_core.dto.Response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class DepartmentResponse {
    private String name;

    private String description;

    private Integer parentSystemID;

    private Integer company;

    private Integer parent;
}
