package com.bolger.dao.mapper;

import com.bolger.dao.dto.YouNeedDocumentPropsDto;
import com.bolger.entities.YouNeedDocumentProps;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface YouNeedDocumentPropsMapper {
    YouNeedDocumentPropsDto documentPropToDocumentPropDto(YouNeedDocumentProps youNeedDocumentProps);
}