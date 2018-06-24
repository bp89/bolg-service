package com.bolger.dao.dto;

import com.bolger.entities.Like;
import com.bolger.entities.Tag;
import com.bolger.entities.View;
import lombok.Data;

import java.util.List;

@Data
public class BlogDto {
    private String title;
    private String content;
    private String authorId;
    private List<Tag> tags;
    private List<Like> likes;
    private List<View> views;
}
