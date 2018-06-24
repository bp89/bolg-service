package com.bolger.dao.dto;

import lombok.Data;

import java.util.Locale;

@Data
public class UserDto {
    private String emailId;
    private String firstName;
    private String lastName;
    private Locale locale;
}
