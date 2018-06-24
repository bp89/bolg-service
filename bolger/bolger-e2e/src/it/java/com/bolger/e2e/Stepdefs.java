package com.bolger.e2e;

import com.bolger.e2e.config.DesiredCapabilitiesProps;
import com.bolger.e2e.config.MongoConfigProps;
import com.bolger.e2e.config.MongoConfiguration;
import com.bolger.e2e.config.WebBrowser;
import com.bolger.e2e.config.WebConfigProps;
import com.bolger.e2e.config.WebConfiguration;
import com.mongodb.client.MongoDatabase;
import cucumber.api.java8.En;
import lombok.SneakyThrows;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import java.io.File;
import java.util.concurrent.TimeUnit;

import static com.github.loyada.jdollarx.singlebrowser.InBrowserSinglton.driver;

@Log4j2
@TestPropertySource(locations = "classpath:test-${spring.profiles.active}.properties")
@ContextConfiguration(
        classes = {WebConfigProps.class,
                WebConfiguration.class,
                MongoConfigProps.class,
                MongoConfiguration.class,
                DesiredCapabilitiesProps.class
        },
        loader = AnnotationConfigContextLoader.class)
public class Stepdefs implements En {
    private static boolean registeredShutdownHook = false;

    @Autowired
    private WebConfigProps webConfigProps;

    @Autowired
    private DesiredCapabilitiesProps desiredCapabilitiesProps;

    @Autowired
    private MongoDatabase mongoDatabase;

    public Stepdefs() {
        Before(() -> {
            driver = WebBrowser.getWebDriver(
                    webConfigProps.getIsRemote(),
                    webConfigProps.getHubUrl(),
                    webConfigProps.getBaseUrl(),
                    desiredCapabilitiesProps.getArguments().split(","),
                    desiredCapabilitiesProps.getPrefs().getDownload(),
                    desiredCapabilitiesProps.getSafeBrowsing()
            );
            driver.manage().timeouts().implicitlyWait(webConfigProps.getElementTimeout(), TimeUnit.SECONDS);

            DBFacade.mongoDatabase = mongoDatabase;
            if (!registeredShutdownHook) {
                Runtime.getRuntime().addShutdownHook(new Thread(() -> WebBrowser.closeBrowser()));
                registeredShutdownHook = true;
            }
        });

        Before(new String[]{"@persistence"}, DBFacade::clear);

        Before(new String[]{"@download"}, this::prepareDownloadDir);

        Before(new String[]{"not @firstTime"}, () -> {
            DBFacade.clearUsers();
            DBFacade.insertDefaultUser(webConfigProps.getTestUsername());
        });
    }

    @SneakyThrows
    private void prepareDownloadDir() {
        File downloadDir = new File(webConfigProps.getHostDownloadDirectory());
        if (downloadDir.exists()) {
            FileUtils.cleanDirectory(downloadDir);
        } else {
            downloadDir.mkdirs();
        }

        // need this to ensure the "chrome" docker container maybe able to write to this folder
        downloadDir.setWritable(true, false);
    }

    private void navigateToPath(String path) {
        driver.navigate().to(webConfigProps.getBaseUrl() + path);
    }
}
