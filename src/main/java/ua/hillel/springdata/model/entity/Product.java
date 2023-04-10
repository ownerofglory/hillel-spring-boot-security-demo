package ua.hillel.springdata.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "t_product")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    private String description;
    @Column(name = "image_url")
    private String imageUrl;
    private Double price;
    private Integer quantity;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
