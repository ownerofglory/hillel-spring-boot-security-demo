package ua.hillel.springsec.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import ua.hillel.springsec.model.dto.AuthDTO;
import ua.hillel.springsec.model.dto.LoginDTO;
import ua.hillel.springsec.model.dto.RegisterDTO;
import ua.hillel.springsec.service.AuthService;

@Controller
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthDTO> login(@RequestBody LoginDTO loginDTO) {
        AuthDTO authDTO = authService.authenticateCustomer(loginDTO);
        return ResponseEntity.ok(authDTO);
    }

    @PostMapping("/register")
    public ResponseEntity<AuthDTO> register(@RequestBody RegisterDTO registerDTO) {
        AuthDTO authDTO = authService.registerCustomer(registerDTO);
        return ResponseEntity.ok(authDTO);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        authService.logout();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
