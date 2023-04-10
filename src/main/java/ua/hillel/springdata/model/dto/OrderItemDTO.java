package ua.hillel.springdata.model.dto;

import lombok.Data;

@Data
public class OrderItemDTO {
    private ProductDTO product;
    private int quantity;
}
