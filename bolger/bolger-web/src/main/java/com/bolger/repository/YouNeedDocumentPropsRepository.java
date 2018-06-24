package com.bolger.repository;

import com.bolger.entities.YouNeedDocumentProps;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface YouNeedDocumentPropsRepository extends MongoRepository<YouNeedDocumentProps, String> {

    List<YouNeedDocumentProps> findAllByOrderByEntityAscCategoryAscNameAsc();
}