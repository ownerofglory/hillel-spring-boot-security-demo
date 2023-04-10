package ua.hillel.springsec.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.hillel.springsec.model.dto.CartDTO;
import ua.hillel.springsec.model.dto.OrderDTO;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @PostMapping("/{userId}")
    public @ResponseBody
    ResponseEntity<OrderDTO> createOrderFromCart(@PathVariable("userId") Long userId, @RequestBody CartDTO cartDTO) {
        return ResponseEntity.ok(null);
    }
}
