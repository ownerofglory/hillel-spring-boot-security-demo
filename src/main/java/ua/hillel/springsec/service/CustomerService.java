package ua.hillel.springsec.service;

import ua.hillel.springsec.model.dto.CustomerDTO;
import ua.hillel.springsec.model.dto.RegisterDTO;

public interface CustomerService {
    CustomerDTO createCustomer(CustomerDTO customerDTO);
    CustomerDTO getCustomerById(Long id);
    CustomerDTO getCustomerByEmail(String email);
}
