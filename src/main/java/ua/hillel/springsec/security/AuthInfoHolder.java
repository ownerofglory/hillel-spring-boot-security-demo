package ua.hillel.springsec.security;

import lombok.Data;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Data
@Component
@Scope(scopeName = "request")
public class AuthInfoHolder {
    private Long authCustomerId;
}
