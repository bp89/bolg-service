package com.bolger.repository;

import com.bolger.entities.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends MongoRepository<Blog, String> {

    Blog findById(String id);
}
