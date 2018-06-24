package com.bolger.rest;

import com.bolger.dao.dto.YouNeedDocumentPropsDto;
import com.bolger.service.YouNeedDocumentPropsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/documents")
public class YouNeedController {
    private final YouNeedDocumentPropsService youNeedDocumentPropsService;

    @GetMapping
    @ResponseBody
    @RequestMapping(path = "/youNeed")
    public ResponseEntity<List<YouNeedDocumentPropsDto>> getAllDoc() {
        return ResponseEntity.ok(youNeedDocumentPropsService.getDocumentList());
    }
}