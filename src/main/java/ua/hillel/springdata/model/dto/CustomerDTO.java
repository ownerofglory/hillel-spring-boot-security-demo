package ua.hillel.springdata.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.List;

@Data
public class CustomerDTO {
    private Long id;
    private String name;
    private String email;
    private CartDTO cart;
    @JsonIgnore
    private List<OrderDTO> orders;
}
