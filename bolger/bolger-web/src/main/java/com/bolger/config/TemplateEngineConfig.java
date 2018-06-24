package com.bolger.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.thymeleaf.templateresolver.TemplateResolver;

import static com.bolger.util.BolgerConstants.Mail.Templates.HTML_5;
import static com.bolger.util.BolgerConstants.Mail.Templates.HTML_EXTENSION;


@Configuration
public class TemplateEngineConfig {

    @Autowired
    private MailConfigProps mailConfigProps;

    @Bean
    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.addTemplateResolver(templateResolver());
        return templateEngine;
    }

    private TemplateResolver templateResolver() {
        TemplateResolver resolver = new ClassLoaderTemplateResolver();
        resolver.setPrefix(mailConfigProps.getTemplatePath());
        resolver.setSuffix(HTML_EXTENSION);
        resolver.setTemplateMode(HTML_5);
        resolver.setOrder(1);
        resolver.setCacheable(true);
        return resolver;
    }
}