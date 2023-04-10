package ua.hillel.springdata.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.hillel.springdata.model.dto.CartDTO;
import ua.hillel.springdata.model.dto.OrderDTO;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @PostMapping("/{userId}")
    public @ResponseBody
    ResponseEntity<OrderDTO> createOrderFromCart(@PathVariable("userId") Long userId, @RequestBody CartDTO cartDTO) {
        return ResponseEntity.ok(null);
    }
}
