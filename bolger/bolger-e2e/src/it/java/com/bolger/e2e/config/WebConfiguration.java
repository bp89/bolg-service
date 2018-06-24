package com.bolger.e2e.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;

@EnableAutoConfiguration
@Configuration
public class WebConfiguration {

    @Autowired
    private WebConfigProps webConfigProps;
}
