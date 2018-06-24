package com.bolger.service;

import com.bolger.dao.dto.UserDto;
import com.bolger.dao.mapper.UserMapper;
import com.bolger.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserRepository userRepository;

    public String getUser(String emailId) {
        return emailId; // TODO: implement logic to fetch user details
    }

    public UserDto saveUser(UserDto userDto) {
        System.out.println(userDto);
        if ("".equals(userDto.getEmailId())) {
            throw new IllegalArgumentException("Email Id is missing...");
        }
        return userMapper.userToUserDto(userRepository.save(userMapper.userDtoToUser(userDto)));
    }
}
