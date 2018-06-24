package com.bolger.dao.mapper;

import com.bolger.dao.dto.BlogDto;
import com.bolger.entities.Blog;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BlogMapper {
    BlogDto blogToBlogDto(Blog blog);

    Blog blogDtotoBlog(BlogDto blogDto);
}
