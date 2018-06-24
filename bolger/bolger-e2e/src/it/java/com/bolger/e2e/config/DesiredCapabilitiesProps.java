package com.bolger.e2e.config;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "chrome.options")
@Getter
@Setter
@NoArgsConstructor
@Component
public class DesiredCapabilitiesProps {
    private String arguments;
    private SafeBrowsing safeBrowsing;
    private Prefs prefs;

    @Getter
    @Setter
    @NoArgsConstructor
    public static class SafeBrowsing {
        private boolean enabled;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Prefs {
        private Download download;

        @Getter
        @Setter
        @NoArgsConstructor
        public static class Download {
            private String defaultDirectory;
            private String directoryUpgrade;
            private String extensionsToOpen;
            private String promptForDownload;
        }
    }
}
