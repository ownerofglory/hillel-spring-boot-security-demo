package ua.hillel.springsec.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import ua.hillel.springsec.model.dto.AuthDTO;
import ua.hillel.springsec.model.dto.CustomerDTO;
import ua.hillel.springsec.model.dto.LoginDTO;
import ua.hillel.springsec.security.JwtUtil;
import ua.hillel.springsec.service.CustomerService;

import java.util.List;

@Controller
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final CustomerService customerService;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<AuthDTO> login(@RequestBody LoginDTO loginDTO) {
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword());
        authenticationManager.authenticate(auth);

        String email = loginDTO.getEmail();
        CustomerDTO customerByEmail = customerService.getCustomerByEmail(email);

        String jwt = jwtUtil.generateToken(customerByEmail.getEmail(), customerByEmail.getId());

        AuthDTO authDTO = new AuthDTO();
        authDTO.setName(customerByEmail.getName());
        authDTO.setToken(jwt);

        return ResponseEntity.ok(authDTO);
    }
}
