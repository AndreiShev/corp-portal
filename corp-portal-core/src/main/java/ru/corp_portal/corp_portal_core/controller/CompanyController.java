package ru.corp_portal.corp_portal_core.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.corp_portal.corp_portal_core.dto.Response.CompanyResponseList;
import ru.corp_portal.corp_portal_core.dto.insert.CompanyInsert;
import ru.corp_portal.corp_portal_core.dto.Response.CompanyResponse;
import ru.corp_portal.corp_portal_core.dto.update.CompanyUpdate;
import ru.corp_portal.corp_portal_core.mapper.CompanyMapper;
import ru.corp_portal.corp_portal_core.service.CompanyService;


@RestController
@RequestMapping("/api/v1/company")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CompanyController {
    private final CompanyService companyService;
    private final CompanyMapper companyMapper;

    @GetMapping("/")
    public ResponseEntity<CompanyResponseList> getCompany() {
        return ResponseEntity.ok().body(
                companyMapper.listCompanyToResponse(companyService.getAllCompanies())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<CompanyResponse> getCompany(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
                companyMapper.companyToResponse(companyService.getCompany(id))
        );
    }

    @PostMapping("/add")
    public ResponseEntity<CompanyResponse> addCompany(@RequestBody CompanyInsert insert) {
        return ResponseEntity.ok().body(
                companyMapper.companyToResponse(companyService.save(companyMapper.insertToCompany(insert)))
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<CompanyResponse> updateCompany(@PathVariable Integer id, @RequestBody CompanyUpdate update) {
        return ResponseEntity.ok().body(
                companyMapper.companyToResponse(companyService.update(id, companyMapper.updateToCompany(update)))
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCompany(@PathVariable Integer id) {
        companyService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
