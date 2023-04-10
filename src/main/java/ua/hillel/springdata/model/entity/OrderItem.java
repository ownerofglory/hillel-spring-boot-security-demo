package ua.hillel.springdata.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "t_order_item")
public class OrderItem {
    @EmbeddedId
    private OrderItemId id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("orderId")
    private Order order;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("productId")
    private Product product;
    private int quantity;
}
