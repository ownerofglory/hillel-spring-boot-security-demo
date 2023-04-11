package ua.hillel.springsec.model.dto;

import lombok.Data;

@Data
public class AuthDTO {
    private String token;
    private String name;
}
