package ua.hillel.springsec.model.dto;

import lombok.Data;

@Data
public class ProductDTO {
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private Double price;
    private Integer quantity;
    private CategoryDTO category;
}
