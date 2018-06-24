package com.bolger.config;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Log4j2
@EnableOAuth2Sso
public class BolgerWebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .antMatcher("/**")
                .authorizeRequests()
                .antMatchers(
                        "/",
                        "/index.html",
                        "/api/users/register",
                        "/api/blogs/**",
                        "/swagger-ui.html",
                        "/swagger-resources/*/**",
                        "/swagger-resources",
                        "/v2/api-docs",
                        "/webjars/**",
                        "/metrics"
                )
                .permitAll()
                .anyRequest()
                .authenticated();
    }
}
