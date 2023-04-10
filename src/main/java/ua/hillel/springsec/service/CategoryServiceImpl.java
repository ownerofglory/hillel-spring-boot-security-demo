package ua.hillel.springsec.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.hillel.springsec.model.dto.CategoryDTO;
import ua.hillel.springsec.model.entity.Category;
import ua.hillel.springsec.model.mapper.CategoryMapper;
import ua.hillel.springsec.repo.CategoryRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepo categoryRepo;
    private final CategoryMapper categoryMapper;

    @Override
    public List<CategoryDTO> getAllCategories() {
        Iterable<Category> all = categoryRepo.findAll();
        List<Category> categories = new ArrayList<>();
        all.forEach(categories::add);
        List<CategoryDTO> dtos = categories.stream().map(categoryMapper::categoryToCategoryDTO).collect(Collectors.toList());
        return dtos;
    }

    @Override
    public CategoryDTO findCategoryByName(String name) {
        Category byName = categoryRepo.findByName(name);
        return categoryMapper.categoryToCategoryDTO(byName);
    }

    @Override
    public CategoryDTO addCategory(CategoryDTO categoryDto) {
        Category category = categoryMapper.categoryDTOToCategory(categoryDto);
        Category savedCategory = categoryRepo.save(category);
        return categoryMapper.categoryToCategoryDTO(savedCategory);
    }

    @Override
    public void deleteCategory(Long categoryId) {
        categoryRepo.deleteById(categoryId);
    }
}
