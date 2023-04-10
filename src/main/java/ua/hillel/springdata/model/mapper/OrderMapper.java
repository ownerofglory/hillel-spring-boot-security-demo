package ua.hillel.springdata.model.mapper;

import org.mapstruct.Mapper;
import ua.hillel.springdata.model.dto.OrderDTO;
import ua.hillel.springdata.model.dto.ProductDTO;
import ua.hillel.springdata.model.entity.Order;
import ua.hillel.springdata.model.entity.OrderItem;
import ua.hillel.springdata.model.entity.Product;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    Order orderDTOToOrder(OrderDTO orderDTO);
    OrderDTO orderToOrderDTO(Order order);
}
