package ua.hillel.springsec.service;

import ua.hillel.springsec.model.dto.CategoryDTO;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getAllCategories();
    CategoryDTO findCategoryByName(String name);
    CategoryDTO addCategory(CategoryDTO category);
    void deleteCategory(Long categoryId);
}
