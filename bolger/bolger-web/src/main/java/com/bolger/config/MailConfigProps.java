package com.bolger.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("auro.config.mail")
@Data
public class MailConfigProps {
    private String noReply;
    private String templatePath;
    private String loginUrl;
}