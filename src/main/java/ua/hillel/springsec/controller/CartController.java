package ua.hillel.springsec.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import ua.hillel.springsec.model.dto.CartDTO;
import ua.hillel.springsec.model.dto.CartSizeDTO;
import ua.hillel.springsec.model.dto.ProductDTO;
import ua.hillel.springsec.security.AuthInfoHolder;
import ua.hillel.springsec.service.CartService;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @GetMapping("/size")
    public @ResponseBody
    ResponseEntity<CartSizeDTO> getCartSize(Long userId) {
        UserDetails principal = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        CartSizeDTO cartSizeDTO = cartService.countCartItemsByCustomerId(userId);

        return ResponseEntity.ok(cartSizeDTO);
    }

    @PostMapping
    public @ResponseBody
    ResponseEntity<CartDTO> addToCart(@RequestHeader("userId") Long userId, @RequestBody ProductDTO productDTO) {
        CartDTO cartDTO = cartService.addProductToCartByCustomerId(userId, productDTO);
        return ResponseEntity.ok(cartDTO);
    }

    @GetMapping
    public @ResponseBody
    ResponseEntity<CartDTO> getCart(@RequestHeader("userId") Long userId) {
        CartDTO cartByCustomerId = cartService.getCartByCustomerId(userId);
        return ResponseEntity.ok(cartByCustomerId);
    }

}
