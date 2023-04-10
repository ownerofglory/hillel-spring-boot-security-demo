package ua.hillel.springdata.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "t_cart_item")
public class CartItem {
    @EmbeddedId
    private CartItemId id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("cartId")
    private Cart cart;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("productId")
    private Product product;
    private Integer quantity;
    private Double totalPrice;
}
