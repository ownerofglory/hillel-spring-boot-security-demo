package ua.hillel.springsec.model.mapper;

import org.mapstruct.Mapper;
import ua.hillel.springsec.model.dto.CustomerDTO;
import ua.hillel.springsec.model.entity.Customer;

@Mapper(componentModel = "spring")
public interface CustomerMapper {
    Customer customerDTOToCustomer(CustomerDTO customerDTO);
    CustomerDTO customerToCustomerDTO(Customer customer);
}
