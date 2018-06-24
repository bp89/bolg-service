package com.bolger.e2e.config;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "web")
@Getter
@Setter
@NoArgsConstructor
@Component
public class WebConfigProps {
    private String baseUrl;
    private Boolean isRemote;
    private String hubUrl;
    private String testUsername;
    private String testPassword;
    private String youNeedPath;
    private Integer elementTimeout;
    private String hostDownloadDirectory;
    private String oktaUrl;
    private String oktaApiKey;
    private String oktaApiUsersPath;
}
