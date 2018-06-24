package com.bolger.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Blogs")
@Data
public class Blog {
    @Id
    private String id;
    @Indexed(unique = true)
    private String title;
    private String content;
    private String authorId;
    private List<Tag> tags;
    private List<Like> likes;
    private Long likesCount;
    private List<View> views;
    private Long viewsCount;
    private List<Comment> comments;
}
