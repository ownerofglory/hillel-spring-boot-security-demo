package ua.hillel.springsec.model.mapper;

import org.mapstruct.Mapper;
import ua.hillel.springsec.model.dto.CartDTO;
import ua.hillel.springsec.model.dto.CategoryDTO;
import ua.hillel.springsec.model.entity.Cart;
import ua.hillel.springsec.model.entity.Category;

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
