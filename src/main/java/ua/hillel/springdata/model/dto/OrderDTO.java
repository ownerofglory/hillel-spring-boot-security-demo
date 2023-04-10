package ua.hillel.springdata.model.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrderDTO {
    private Long id;
    private CustomerDTO customer;
    private LocalDateTime orderDate;
    private List<OrderItemDTO> orderItems;
}
