package com.bolger.service;

import com.bolger.config.MailConfigProps;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.log4j.Log4j2;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
@Log4j2
public class EmailService {
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine templateEngine;
    private final MailConfigProps mailConfigProps;



    @SneakyThrows
    private String readTemplate(String templateName, Context templateContext) {
        String htmlTemplate = templateEngine.process(templateName, templateContext);
        log.info("Parsed Thymleaf template at {} is {}", templateName, htmlTemplate);
        return htmlTemplate;
    }

    @SneakyThrows
    private void sendSimpleMessage(String from, String to, String subject, String text) {
        MimeMessage message = javaMailSender.createMimeMessage();
        message.setFrom(new InternetAddress("noreply@gmail.com", "No Reply"));

        try {
            message.setContent(text, "text/html; charset=utf-8");
            MimeMessageHelper helper = new MimeMessageHelper(message, false);
            helper.setTo(to);
            helper.setSubject(subject);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            log.debug("Unable to send email to {} with subject line {}. Detailed Root cause is: {}", to, subject, e);
            log.error("Unable to send email to {} with subject line {}. Root cause is: {}", to, subject, e.getCause());
        }
    }
}