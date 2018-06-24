package com.bolger.entities;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "YouNeedDocumentProps")
@Data
@Builder
public class YouNeedDocumentProps {

    @Id
    private String id;
    private String name;
    private String category;
    private String entity;
    private String product;
    private String description;
    private Instant uploadedDate;
    private Instant expiryDate;
    private String uri;
}