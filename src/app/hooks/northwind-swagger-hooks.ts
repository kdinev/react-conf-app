import { useCallback, useEffect, useState } from 'react';
import { CustomerDto } from '../models/NorthwindSwagger/customer-dto';
import { getCustomerDtoList, getOrderDtoList } from '../services/northwind-swagger';
import { OrderDto } from '../models/NorthwindSwagger/order-dto';

export const useGetCustomerDtoList = () => {
  const [customerDto, setCustomerDto] = useState<CustomerDto[]>([]);

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    getCustomerDtoList()
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomerDto();
  }, [requestCustomerDto]);

  return { requestNorthwindSwaggerCustomerDto: requestCustomerDto, northwindSwaggerCustomerDto: customerDto, setNorthwindSwaggerCustomerDto: setCustomerDto };
}

export const useGetOrderDtoList = (id: string) => {
  const [orderDto, setOrderDto] = useState<OrderDto[]>([]);

  const requestOrderDto = useCallback(() => {
    let ignore = false;
    getOrderDtoList(id)
      .then((data) => {
        if (!ignore) {
          setOrderDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestOrderDto();
  }, [id, requestOrderDto]);

  return { requestNorthwindSwaggerOrderDto: requestOrderDto, northwindSwaggerOrderDto: orderDto, setNorthwindSwaggerOrderDto: setOrderDto };
}
