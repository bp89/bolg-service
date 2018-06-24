package com.bolger.entities;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Like {
    private String userId;
    private String userName;
}
