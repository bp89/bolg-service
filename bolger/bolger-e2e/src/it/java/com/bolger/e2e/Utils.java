package com.bolger.e2e;

import com.github.loyada.jdollarx.Path;
import lombok.SneakyThrows;
import lombok.extern.log4j.Log4j2;

import java.io.File;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

import static com.github.loyada.jdollarx.singlebrowser.InBrowserSinglton.find;
import static com.github.loyada.jdollarx.singlebrowser.InBrowserSinglton.sendKeys;

@Log4j2
public class Utils {
    private static final long FILE_EXISTS_TIME_OUT = 10;
    private static final long FILE_EXISTS_INTERVAL = 250;
    private static final long ELEMENT_EXISTS_TIME_OUT = 10;
    private static final long ELEMENT_EXISTS_INTERVAL = 500;

    @SneakyThrows
    public static boolean untilFileExists(File file) {
        Instant end = Instant.now().plus(FILE_EXISTS_TIME_OUT, ChronoUnit.SECONDS);
        while (true) {
            log.debug("Polling for file {}", file.getAbsolutePath());

            if (file.exists()) {
                return true;
            }

            if (end.isBefore(Instant.now())) {
                return false;
            }
            Thread.sleep(FILE_EXISTS_INTERVAL);
        }
    }

    @SneakyThrows
    public static void replaceInputText(Path input, String text) {
        find(input).clear();
        sendKeys(text).to(input);
    }

    @SneakyThrows
    public static String getInputText(Path input) {
        return find(input).getAttribute("value");
    }
}
