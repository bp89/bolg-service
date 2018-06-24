package com.bolger.e2e.converter;

import cucumber.deps.com.thoughtworks.xstream.converters.basic.AbstractSingleValueConverter;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.TimeZone;

import static com.bolger.e2e.util.BolgerE2EConstant.DATE_FORMAT_ISO_8601;

public class InstantConverter extends AbstractSingleValueConverter {

    @Override
    public boolean canConvert(Class type) {
        return type.equals(Instant.class);
    }

    @Override
    public Object fromString(String dateString) {
        DateFormat formatter = new SimpleDateFormat(DATE_FORMAT_ISO_8601);
        formatter.setTimeZone(TimeZone.getTimeZone("UTC"));
        try {
            return formatter.parse(dateString).toInstant();
        } catch (ParseException e) {
            return null;
        }
    }
}