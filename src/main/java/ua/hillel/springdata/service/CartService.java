package ua.hillel.springdata.service;

import ua.hillel.springdata.model.dto.CartDTO;
import ua.hillel.springdata.model.dto.CartSizeDTO;
import ua.hillel.springdata.model.dto.ProductDTO;

public interface CartService {
    CartDTO addProductToCartByCustomerId(Long customerId, ProductDTO productDTO);
    CartDTO getCartByCustomerId(Long customerId);
    CartSizeDTO countCartItemsByCustomerId(Long customerId);
}
