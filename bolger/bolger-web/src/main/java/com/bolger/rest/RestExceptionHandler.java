package com.bolger.rest;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Log4j2
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({AccessDeniedException.class})
    public ResponseEntity<Object> handleAccessDeniedException(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body(ex.getMessage());
    }

    @ExceptionHandler({IllegalArgumentException.class})
    public ResponseEntity<Object> handleIllegalArgumentException(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ex.getMessage());
    }

    @ExceptionHandler({HttpStatusCodeException.class})
    public ResponseEntity<Object> handleRegularException(HttpStatusCodeException httpStatusCodeException) {
        log.error("Http call failed with status code `{}` with root cause `{}`",
                httpStatusCodeException.getStatusCode(), httpStatusCodeException.getResponseBodyAsString());

        return ResponseEntity
                .status(httpStatusCodeException.getStatusCode())
                .body(httpStatusCodeException.getResponseBodyAsString());
    }

    @ExceptionHandler({Exception.class})
    public ResponseEntity<Object> handleRegularException(Exception ex) {
        log.error("Internal server error - 500 response sent to client", ex);

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ex.getMessage());
    }
}