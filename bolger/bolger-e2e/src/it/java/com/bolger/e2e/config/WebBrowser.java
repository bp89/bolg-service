package com.bolger.e2e.config;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class WebBrowser {

    private static WebDriver webDriver;

    public static WebDriver getWebDriver(boolean isRemote, String hubUrl, String baseUrl,
                                         String[] arguments,
                                         DesiredCapabilitiesProps.Prefs.Download downloadProps,
                                         DesiredCapabilitiesProps.SafeBrowsing safeBrowsingProps) throws MalformedURLException {
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.setExperimentalOption("prefs", buildChromePrefs(downloadProps, safeBrowsingProps));
        chromeOptions.addArguments("--window-size=1920,1080");
            if (webDriver == null || ((RemoteWebDriver) webDriver).getSessionId() == null) {
            if (isRemote) {
                DesiredCapabilities dc = DesiredCapabilities.chrome();
                chromeOptions.addArguments(arguments);
                // TODO: Need to make headless, issue with RemoteDriver rejecting https requests (https://groups.google.com/a/chromium.org/forum/#!topic/headless-dev/eiudRsYdc3A)
//                chromeOptions.addArguments("--headless");
//                chromeOptions.addArguments("--ignore-certificate-errors");
//                chromeOptions.addArguments("--no-sandbox");
                dc.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
                dc.setAcceptInsecureCerts(true);
                webDriver = new RemoteWebDriver(new URL(hubUrl), dc);
                clearLocalStorage(baseUrl);
            } else {
                webDriver = new ChromeDriver(chromeOptions);
            }
        }

        return webDriver;
    }

    private static Map<String, Object> buildChromePrefs(DesiredCapabilitiesProps.Prefs.Download downloadProps,
                                                        DesiredCapabilitiesProps.SafeBrowsing safeBrowsingProps) {
        Map<String, Object> prefs = new HashMap<>();
        prefs.put("download.default_directory", downloadProps.getDefaultDirectory());
        prefs.put("download.directory_upgrade", downloadProps.getDirectoryUpgrade());
        prefs.put("download.extensions_to_open", downloadProps.getExtensionsToOpen());
        prefs.put("download.prompt_for_download", downloadProps.getPromptForDownload());
        prefs.put("safebrowsing.enabled", safeBrowsingProps.isEnabled());
        return prefs;
    }

    public static void clearLocalStorage(String baseUrl) {
        webDriver.navigate().to(baseUrl);
        ((RemoteWebDriver) webDriver).executeScript("window.localStorage.clear();");
    }

    public static void clearLocalStorageItem(String item) {
        ((RemoteWebDriver) webDriver).executeScript("window.localStorage.removeItem('" + item + "');");
    }

    public static void closeBrowser() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }

    public static void reloadPage() {
        webDriver.navigate().refresh();
    }

    public static String getLocalStorageItem(String item) {
        return (String)((RemoteWebDriver) webDriver).executeScript(String.format("return window.localStorage.getItem('%s');", item ));
    }
}
