package ua.hillel.springdata.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class CartDTO {
    private Long id;
    private CustomerDTO customer;
    private List<CartItemDTO> cartItems;
}
