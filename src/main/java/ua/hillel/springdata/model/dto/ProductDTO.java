package ua.hillel.springdata.model.dto;

import lombok.Data;
import ua.hillel.springdata.model.entity.Category;

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
