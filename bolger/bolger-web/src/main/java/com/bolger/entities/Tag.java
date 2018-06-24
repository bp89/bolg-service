package com.bolger.entities;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Tag {
    private String name;
    private String description;
}
