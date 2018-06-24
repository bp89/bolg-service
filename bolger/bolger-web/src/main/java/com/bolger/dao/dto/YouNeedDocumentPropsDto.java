package com.bolger.dao.dto;

import lombok.Data;

import java.time.Instant;

@Data
public class YouNeedDocumentPropsDto {
    private String name;
    private String category;
    private String entity;
    private String product;
    private String description;
    private Instant uploadedDate;
    private Instant expiryDate;
    private String uri;
}