package ua.hillel.springdata.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import ua.hillel.springdata.model.dto.CategoryDTO;
import ua.hillel.springdata.model.dto.ProductDTO;
import ua.hillel.springdata.model.entity.Category;
import ua.hillel.springdata.model.entity.Product;

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
