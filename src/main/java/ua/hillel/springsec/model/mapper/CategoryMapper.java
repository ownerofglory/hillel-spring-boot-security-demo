package ua.hillel.springsec.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import ua.hillel.springsec.model.dto.CategoryDTO;
import ua.hillel.springsec.model.dto.ProductDTO;
import ua.hillel.springsec.model.entity.Category;
import ua.hillel.springsec.model.entity.Product;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    @Mapping(source = "products", target = "products", qualifiedByName = "productToProductDTO")
    CategoryDTO categoryToCategoryDTO(Category category);
    @Mapping(source = "products", target = "products", qualifiedByName = "productDTOToProduct")
    Category categoryDTOToCategory(CategoryDTO category);

    @Named("productToProductDTO")
    static ProductDTO productToProductDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setCategory(ProductMapper.categoryToCategoryDTO(product.getCategory()));
        productDTO.setId(product.getId());
        productDTO.setTitle(product.getTitle());
        productDTO.setDescription(product.getDescription());
        productDTO.setImageUrl(product.getImageUrl());
        productDTO.setPrice(product.getPrice());
        productDTO.setQuantity(product.getQuantity());
        return productDTO;
    }

    @Named("productDTOToProduct")
    static Product productDTOToProduct(ProductDTO productDto) {
        Product product = new Product();
        product.setCategory(ProductMapper.categoryDTOToCategory(productDto.getCategory()));
        product.setId(productDto.getId());
        product.setTitle(productDto.getTitle());
        product.setDescription(productDto.getDescription());
        product.setImageUrl(productDto.getImageUrl());
        product.setPrice(productDto.getPrice());
        product.setQuantity(productDto.getQuantity());
        return product;
    }
}
