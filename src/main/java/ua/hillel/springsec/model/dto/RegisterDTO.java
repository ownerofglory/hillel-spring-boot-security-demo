package ua.hillel.springsec.model.dto;

import lombok.Data;

@Data
public class RegisterDTO {
    private String email;
    private String password;
    private String name;
}
