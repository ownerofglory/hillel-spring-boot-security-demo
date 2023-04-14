package ua.hillel.springsec.service;

import ua.hillel.springsec.model.dto.AuthDTO;
import ua.hillel.springsec.model.dto.CustomerDTO;
import ua.hillel.springsec.model.dto.LoginDTO;
import ua.hillel.springsec.model.dto.RegisterDTO;

public interface AuthService {
    AuthDTO authenticateCustomer(LoginDTO loginDTO);
    AuthDTO registerCustomer(RegisterDTO registerDTO);
    void logout();
}
