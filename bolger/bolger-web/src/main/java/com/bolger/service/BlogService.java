package com.bolger.service;

import com.bolger.dao.dto.BlogDto;
import com.bolger.dao.mapper.BlogMapper;
import com.bolger.repository.BlogRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private BlogMapper blogMapper;

    public BlogDto save(BlogDto blogDto) {
        System.out.println(blogMapper.blogDtotoBlog(blogDto).toString());
        return blogMapper.blogToBlogDto(blogRepository.save(blogMapper.blogDtotoBlog(blogDto)));
    }

}
