package ua.hillel.springdata.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.List;

@Data
public class CategoryDTO {
    private Long id;
    private String name;
    @JsonIgnore
    private List<ProductDTO> products;
}
