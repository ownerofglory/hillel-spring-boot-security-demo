package ua.hillel.springsec.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import ua.hillel.springsec.model.entity.Product;

public interface ProductRepo extends PagingAndSortingRepository<Product, Long> {
    Page<Product> findAllByCategoryId(Long categoryId, Pageable pageable);
    Product getProductById(Long id);
}
