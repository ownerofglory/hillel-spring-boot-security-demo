package ua.hillel.springdata.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.hillel.springdata.model.dto.CartDTO;
import ua.hillel.springdata.model.dto.CartSizeDTO;
import ua.hillel.springdata.model.dto.ProductDTO;
import ua.hillel.springdata.service.CartService;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @GetMapping("/{userId}/size")
    public @ResponseBody
    ResponseEntity<CartSizeDTO> getCartSize(@PathVariable("userId") Long userId) {
        CartSizeDTO cartSizeDTO = cartService.countCartItemsByCustomerId(userId);

        return ResponseEntity.ok(cartSizeDTO);
    }

    @PostMapping("/{userId}")
    public @ResponseBody
    ResponseEntity<CartDTO> addToCart(@PathVariable("userId") Long userId, @RequestBody ProductDTO productDTO) {
        CartDTO cartDTO = cartService.addProductToCartByCustomerId(userId, productDTO);
        return ResponseEntity.ok(cartDTO);
    }

    @GetMapping("/{userId}")
    public @ResponseBody
    ResponseEntity<CartDTO> getCart(@PathVariable("userId") Long userId) {
        CartDTO cartByCustomerId = cartService.getCartByCustomerId(userId);
        return ResponseEntity.ok(cartByCustomerId);
    }

}
