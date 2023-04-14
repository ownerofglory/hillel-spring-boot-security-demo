package ua.hillel.springsec.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.hillel.springsec.model.dto.CustomerDTO;
import ua.hillel.springsec.model.dto.RegisterDTO;
import ua.hillel.springsec.model.entity.Customer;
import ua.hillel.springsec.model.mapper.CustomerMapper;
import ua.hillel.springsec.repo.CustomerRepo;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepo customerRepo;
    private final CustomerMapper customerMapper;

    @Override
    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        Customer customer = customerMapper.customerDTOToCustomer(customerDTO);
        Customer savedCustomer = customerRepo.saveAndFlush(customer);
        return customerMapper.customerToCustomerDTO(savedCustomer);
    }

    @Override
    public CustomerDTO getCustomerById(Long id) {
        Customer customer = customerRepo.findById(id).orElseThrow();

        return customerMapper.customerToCustomerDTO(customer);
    }

    @Override
    public CustomerDTO getCustomerByEmail(String email) {
        Customer byEmail = customerRepo.findByEmail(email);
        return customerMapper.customerToCustomerDTO(byEmail);
    }

}
