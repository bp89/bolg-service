package com.bolger.e2e.config;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "mongo.config")
@Getter
@Setter
@NoArgsConstructor
@Component
public class MongoConfigProps {
    private String host;
    private int port;
    private String databaseName;
    private String username;
    private String password;
}
