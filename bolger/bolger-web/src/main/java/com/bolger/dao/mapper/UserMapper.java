package com.bolger.dao.mapper;

import com.bolger.dao.dto.UserDto;
import com.bolger.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto userToUserDto(User user);

    User userDtoToUser(UserDto userDto);
}
