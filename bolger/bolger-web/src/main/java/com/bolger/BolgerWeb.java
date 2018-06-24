package com.bolger;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@Log4j2
@SpringBootApplication
@EnableResourceServer
@EnableWebSecurity
@PropertySources({@PropertySource(value = "classpath:application.properties"),
        @PropertySource(value = "file:./config/application.properties", ignoreResourceNotFound = true)})
@EnableAsync
public class BolgerWeb {

    public static void main(String[] args) {
        log.info("Initializing the Bolger Web application");
        try {
            SpringApplication.run(BolgerWeb.class, args);
            log.info("Bolger Web is up and running");
        } catch (Throwable t) {
            log.error("Failed to start Bolger web", t);
            throw new RuntimeException(t);
        }
    }
}
