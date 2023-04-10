package ua.hillel.springsec.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import ua.hillel.springsec.model.dto.CategoryDTO;
import ua.hillel.springsec.model.dto.ProductDTO;
import ua.hillel.springsec.model.entity.Category;
import ua.hillel.springsec.model.entity.Product;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    @Mapping(source = "category", target = "category", qualifiedByName = "categoryToCategoryDTO")
    ProductDTO productToProductDTO(Product product);
    @Mapping(source = "category", target = "category", qualifiedByName = "categoryDTOToCategory")
    Product productToProductDTO(ProductDTO productDto);

    @Named("categoryToCategoryDTO")
    static CategoryDTO categoryToCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setName(category.getName());
        return categoryDTO;
    }

    @Named("categoryDTOToCategory")
    static Category categoryDTOToCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setName(categoryDTO.getName());
        return category;
    }
}
