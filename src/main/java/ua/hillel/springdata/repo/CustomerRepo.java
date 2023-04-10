package ua.hillel.springdata.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.hillel.springdata.model.entity.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Long> {
}
