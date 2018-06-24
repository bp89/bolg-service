package com.bolger.rest;

import com.bolger.dao.dto.UserDto;
import com.bolger.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/users")
public class UserController {
    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<?> get(Principal principal) {
        log.info(String.format("Current User : %s ", principal.getName()));
        return ResponseEntity.ok(principal);
    }

    @PostMapping("/me")
    public ResponseEntity<?> saveOrUpdate(Principal principal) {
        log.info(String.format("Current User : %s ", principal.getName()));
        UserDto userDto = new UserDto();
        String[] name = principal.getName().split(" ");
        userDto.setFirstName(name[0]);
        userDto.setLastName(name[1]);
        userDto.setEmailId(principal.getName());
        return ResponseEntity.ok(userService.saveUser(userDto));
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto userDto) {
        return ResponseEntity.ok(userService.saveUser(userDto));
    }
}
