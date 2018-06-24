package com.bolger.rest;

import com.bolger.dao.dto.BlogDto;
import com.bolger.repository.BlogRepository;
import com.bolger.service.BlogService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/blogs")
@Log4j2
public class BlogController {
    @Autowired
    BlogService blogService;

    @Autowired
    BlogRepository blogRepository;

    @PostMapping("/save")
    public ResponseEntity<?> saveOrUpdate(@RequestBody BlogDto blogDto) {
        return ResponseEntity.ok(blogService.save(blogDto));
    }

    @GetMapping("/list")
    public ResponseEntity<?> list() {
        return ResponseEntity.ok(blogRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable String id) {
        return ResponseEntity.ok(blogRepository.findById(id));
    }
}
