package ua.hillel.springdata.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Named;
import ua.hillel.springdata.model.dto.CartDTO;
import ua.hillel.springdata.model.dto.CategoryDTO;
import ua.hillel.springdata.model.entity.Cart;
import ua.hillel.springdata.model.entity.Category;

@Mapper(componentModel = "spring")
public interface CartMapper {
    CartDTO cartToCartDTO(Cart cart);
    Cart cartDTOToCart(CartDTO cartDTO);

    static CategoryDTO categoryToCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setName(category.getName());
        return categoryDTO;
    }

}
