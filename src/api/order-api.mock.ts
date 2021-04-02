import {Injectable} from '@angular/core';
import {GroupOrder} from '@group-order/group-order';
import {Order} from '@order/order';
import {OrderApi} from './order-api';

@Injectable()
export class OrderApiMock extends OrderApi {
  saveOrder(order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }
  fetchOrders(groupOrderId: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  updateOrder(order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeOrder(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
