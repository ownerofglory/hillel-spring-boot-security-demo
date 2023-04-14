package ua.hillel.springsec.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ua.hillel.springsec.model.dto.AuthDTO;
import ua.hillel.springsec.model.dto.CustomerDTO;
import ua.hillel.springsec.model.dto.LoginDTO;
import ua.hillel.springsec.model.dto.RegisterDTO;
import ua.hillel.springsec.model.entity.Customer;
import ua.hillel.springsec.model.mapper.CustomerMapper;
import ua.hillel.springsec.repo.CustomerRepo;
import ua.hillel.springsec.security.JwtUtil;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final AuthenticationManager authenticationManager;
    private final CustomerRepo customerRepo;
    private final CustomerMapper customerMapper;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    @Override
    public AuthDTO authenticateCustomer(LoginDTO loginDTO) {
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword());
        authenticationManager.authenticate(auth);

        Customer customerByEmail = customerRepo.findByEmail(loginDTO.getEmail());
        CustomerDTO customerDTO = customerMapper.customerToCustomerDTO(customerByEmail);

        String jwt = jwtUtil.generateToken(customerByEmail.getEmail(), customerByEmail.getId());

        AuthDTO authDTO = new AuthDTO();
        authDTO.setName(customerByEmail.getName());
        authDTO.setToken(jwt);
        authDTO.setUserId(customerByEmail.getId());

        return authDTO;
    }

    @Override
    public AuthDTO registerCustomer(RegisterDTO registerDTO) {
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setName(registerDTO.getName());
        customerDTO.setEmail(registerDTO.getEmail());

        String password = registerDTO.getPassword();
        String encodedPassword = passwordEncoder.encode(password);

        customerDTO.setPassword(encodedPassword);
        Customer customer = customerMapper.customerDTOToCustomer(customerDTO);
        Customer savedCustomer = customerRepo.saveAndFlush(customer);

        String jwt = jwtUtil.generateToken(savedCustomer.getEmail(), savedCustomer.getId());

        AuthDTO authDTO = new AuthDTO();
        authDTO.setToken(jwt);
        authDTO.setName(savedCustomer.getName());
        authDTO.setUserId(savedCustomer.getId());

        return authDTO;
    }

    @Override
    public void logout() {
        SecurityContextHolder.getContext().setAuthentication(null);
    }
}
