package ua.hillel.springsec.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.hillel.springsec.model.dto.CartDTO;
import ua.hillel.springsec.model.dto.CartSizeDTO;
import ua.hillel.springsec.model.dto.ProductDTO;
import ua.hillel.springdata.model.entity.*;
import ua.hillel.springsec.model.entity.*;
import ua.hillel.springsec.model.mapper.CartMapper;
import ua.hillel.springsec.repo.CartRepo;
import ua.hillel.springsec.repo.CustomerRepo;
import ua.hillel.springsec.repo.ProductRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepo cartRepo;
    private final CustomerRepo customerRepo;
    private final ProductRepo productRepo;
    private final CartMapper cartMapper;

    @Override
    public CartDTO addProductToCartByCustomerId(Long customerId, ProductDTO productDTO) {
        Customer customerById = customerRepo.findById(customerId).orElse(null);

        // find cart for customer
        Cart cartByCustomer = cartRepo.findByCustomerId(customerId);
        // if cart does not exist create one
        if (cartByCustomer == null) {
            cartByCustomer = new Cart();
            cartByCustomer.setCustomer(customerById);
            cartByCustomer = cartRepo.save(cartByCustomer);
        }

        List<CartItem> cartItems = cartByCustomer.getCartItems();
        if (cartItems == null) {
            cartItems = new ArrayList<>();
            cartByCustomer.setCartItems(cartItems);
        }

        Product productById = productRepo.getProductById(productDTO.getId());


        CartItem relevantCarItem = cartItems.stream()
                .filter(ci -> Objects.equals(ci.getProduct().getId(), productDTO.getId()))
                .limit(1).findFirst().orElse(null);

        if (relevantCarItem == null) {
            relevantCarItem = new CartItem();
            CartItemId cartItemId = new CartItemId();
            cartItemId.setCartId(cartByCustomer.getId());
            cartItemId.setProductId(productById.getId());
            relevantCarItem.setId(cartItemId);
            relevantCarItem.setCart(cartByCustomer);
            relevantCarItem.setProduct(productById);
            relevantCarItem.setQuantity(0);
            cartItems.add(relevantCarItem);
        }

        relevantCarItem.setQuantity(relevantCarItem.getQuantity() + 1);

        cartRepo.saveAndFlush(cartByCustomer);

        return cartMapper.cartToCartDTO(cartByCustomer);
    }

    @Override
    public CartDTO getCartByCustomerId(Long customerId) {
        Customer customerById = customerRepo.findById(customerId).orElse(null);

        // find cart for customer
        Cart cartByCustomer = cartRepo.findByCustomerId(customerId);
        return cartMapper.cartToCartDTO(cartByCustomer);
    }

    @Override
    public CartSizeDTO countCartItemsByCustomerId(Long customerId) {
        Cart byCustomerId = cartRepo.findByCustomerId(customerId);
        Integer size;
        if (byCustomerId == null)  {
            size = 0;
        } else {
            List<CartItem> cartItems = byCustomerId.getCartItems();
            size = cartItems != null ? cartItems.size() : 0;
        }

        CartSizeDTO cartSizeDTO = new CartSizeDTO();
        cartSizeDTO.setSize(size);
        return cartSizeDTO;
    }
}
