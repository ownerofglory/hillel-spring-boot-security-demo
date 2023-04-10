package ua.hillel.springdata.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import ua.hillel.springdata.model.entity.Category;
import ua.hillel.springdata.model.entity.Product;

public interface ProductRepo extends PagingAndSortingRepository<Product, Long> {
    Page<Product> findAllByCategoryId(Long categoryId, Pageable pageable);
    Product getProductById(Long id);
}
