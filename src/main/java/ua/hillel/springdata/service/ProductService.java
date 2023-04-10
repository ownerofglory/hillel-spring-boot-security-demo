package ua.hillel.springdata.service;

import ua.hillel.springdata.model.dto.ProductDTO;
import ua.hillel.springdata.model.entity.Category;

import java.util.List;

public interface ProductService {
    List<ProductDTO> getAllProductsForPage(int num, int count);
    List<ProductDTO> getProductsByCategoryForPage(Long categoryId, int num, int count);
    ProductDTO getProductById(Long id);
}
