package ua.hillel.springdata.repo;

import org.springframework.data.repository.CrudRepository;
import ua.hillel.springdata.model.entity.Category;

public interface CategoryRepo extends CrudRepository<Category, Long> {
    Category findByName(String name);
}
