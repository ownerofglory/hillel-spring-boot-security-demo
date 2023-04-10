package ua.hillel.springsec.model.mapper;

import org.mapstruct.Mapper;
import ua.hillel.springsec.model.dto.OrderDTO;
import ua.hillel.springsec.model.entity.Order;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    Order orderDTOToOrder(OrderDTO orderDTO);
    OrderDTO orderToOrderDTO(Order order);
}
