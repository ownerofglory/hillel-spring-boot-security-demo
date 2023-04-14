package ua.hillel.springsec.service;

import ua.hillel.springsec.exception.UserNotAuthorizedException;
import ua.hillel.springsec.model.dto.CartDTO;
import ua.hillel.springsec.model.dto.CartSizeDTO;
import ua.hillel.springsec.model.dto.ProductDTO;

public interface CartService {
    CartDTO addProductToCartByCustomerId(Long customerId, ProductDTO productDTO) throws UserNotAuthorizedException;
    CartDTO getCartByCustomerId(Long customerId);
    CartSizeDTO countCartItemsByCustomerId(Long customerId);
}
