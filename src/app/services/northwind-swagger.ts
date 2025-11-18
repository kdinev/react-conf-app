import { CustomerDto } from '../models/NorthwindSwagger/customer-dto';
import { FetchApi } from './fetch-api';
import { OrderDto } from '../models/NorthwindSwagger/order-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
  return await FetchApi.fetchApiResponse<CustomerDto[]>(`${API_ENDPOINT}/Customers`, []);
}

export async function getOrderDtoList(id: string): Promise<OrderDto[]> {
  return await FetchApi.fetchApiResponse<OrderDto[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, []);
}
