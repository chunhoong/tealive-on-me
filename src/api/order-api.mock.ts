import { Injectable } from '@angular/core';
import findOrder from '@assets/json/findOrder.json';
import { Order } from '@order/order';
import { OrderApi } from './order-api';

@Injectable()
export class OrderApiMock extends OrderApi {
  saveOrder(order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findOrder(id: string): Promise<Order> {
    return Promise.resolve(findOrder as Order);
  }
  fetchOrders(groupOrderId: string): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }
  updateOrder(order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeOrder(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
