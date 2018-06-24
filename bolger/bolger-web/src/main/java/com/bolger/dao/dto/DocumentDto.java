package com.bolger.dao.dto;

import lombok.Data;

import java.time.Instant;

@Data
public class DocumentDto {
    private final int id;
    private final String name;
    private final String downloadId;
    private final int category;
    private final int entity;
    private final int product;
    private final int status;
    private final Instant submissionDate;
    private final Instant expiryDate;
}
