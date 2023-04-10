package ua.hillel.springdata.model.dto;

import lombok.Data;

@Data
public class CartItemDTO {
    private ProductDTO product;
    private int quantity;
}
