package com.bolger.entities;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
public class Comment {
    private String comment;
    private String userId;
    private List<Like> likes;
    private Long likesCount;
}
