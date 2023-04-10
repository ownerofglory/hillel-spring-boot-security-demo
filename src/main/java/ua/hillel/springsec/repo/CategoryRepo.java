package ua.hillel.springsec.repo;

import org.springframework.data.repository.CrudRepository;
import ua.hillel.springsec.model.entity.Category;

public interface CategoryRepo extends CrudRepository<Category, Long> {
    Category findByName(String name);
}
