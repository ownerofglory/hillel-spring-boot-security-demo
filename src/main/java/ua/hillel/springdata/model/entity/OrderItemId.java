package ua.hillel.springdata.model.entity;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class OrderItemId {
    private Long orderId;
    private Long productId;
}
