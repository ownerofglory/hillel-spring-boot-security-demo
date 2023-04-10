package ua.hillel.springdata.service;

import ua.hillel.springdata.model.dto.CategoryDTO;
import ua.hillel.springdata.model.entity.Category;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getAllCategories();
    CategoryDTO findCategoryByName(String name);
    CategoryDTO addCategory(CategoryDTO category);
    void deleteCategory(Long categoryId);
}
