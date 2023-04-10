package ua.hillel.springsec.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.hillel.springsec.model.entity.Cart;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {
    Cart findByCustomerId(Long customerId);
}
