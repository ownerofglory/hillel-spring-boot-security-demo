package ua.hillel.springsec.service;

import ua.hillel.springsec.model.dto.ProductDTO;

import java.util.List;

public interface ProductService {
    List<ProductDTO> getAllProductsForPage(int num, int count);
    List<ProductDTO> getProductsByCategoryForPage(Long categoryId, int num, int count);
    ProductDTO getProductById(Long id);
}
