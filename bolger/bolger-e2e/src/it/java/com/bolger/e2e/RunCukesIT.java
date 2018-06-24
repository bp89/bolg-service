package com.bolger.e2e;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/it/resources/features"}, format = {"pretty", "html:target/cucumber", "json:target/cucumber-report.json"},
        tags = {"not @disabled", "not @wip"})
public class RunCukesIT {
}
