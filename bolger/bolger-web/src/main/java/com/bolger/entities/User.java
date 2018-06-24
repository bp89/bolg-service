package com.bolger.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
@Data
public class User {
    @Id
    private String id;

    @Indexed(unique = true)
    private String emailId;
    private String firstName;
    private String lastName;
}