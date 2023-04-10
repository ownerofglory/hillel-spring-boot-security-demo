package ua.hillel.springdata.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import ua.hillel.springdata.model.dto.ProductDTO;
import ua.hillel.springdata.model.entity.Category;
import ua.hillel.springdata.model.entity.Product;
import ua.hillel.springdata.model.mapper.ProductMapper;
import ua.hillel.springdata.repo.ProductRepo;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepo productRepo;
    private final ProductMapper productMapper;

    @Override
    public List<ProductDTO> getAllProductsForPage(int num, int count) {
        Pageable criteria = PageRequest.of(num, count);
        Page<Product> productPage = productRepo.findAll(criteria);
        return productPage.get()
                .map(productMapper::productToProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductDTO> getProductsByCategoryForPage(Long categoryId, int num, int count) {
        Pageable criteria = PageRequest.of(num, count);
        Page<Product> page = productRepo.findAllByCategoryId(categoryId, criteria);
        return page.get()
                .map(productMapper::productToProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO getProductById(Long id) {
        Product productById = productRepo.getProductById(id);
        return productMapper.productToProductDTO(productById);
    }
}
