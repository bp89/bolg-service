package com.bolger.service;

import com.bolger.dao.dto.YouNeedDocumentPropsDto;
import com.bolger.dao.mapper.YouNeedDocumentPropsMapper;
import com.bolger.entities.YouNeedDocumentProps;
import com.bolger.repository.YouNeedDocumentPropsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Log4j2
@Component
@RequiredArgsConstructor
public class YouNeedDocumentPropsService {

    private final YouNeedDocumentPropsRepository youNeedDocumentPropsRepository;

    private final YouNeedDocumentPropsMapper youNeedDocumentPropsMapper;


    public List<YouNeedDocumentPropsDto> getDocumentList() {

        try {
            log.debug("Fetching 'What you need from us' documents");

            List<YouNeedDocumentProps> documentList =
                    youNeedDocumentPropsRepository.findAllByOrderByEntityAscCategoryAscNameAsc();

            if (documentList.size() == 0) {
                log.debug("No documents found for 'What you need from us'");
            }

            return documentList.stream()
                    .map(youNeedDocumentPropsMapper::documentPropToDocumentPropDto)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            log.error("Error fetching documents. Ex: ", e);
            throw e;
        }
    }

}