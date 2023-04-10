package ua.hillel.springsec.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.hillel.springsec.model.entity.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Long> {
}
