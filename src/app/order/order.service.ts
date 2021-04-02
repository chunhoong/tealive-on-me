import { Injectable } from '@angular/core';
import { OrderApi } from '@api/order-api';
import { Order } from './order';

@Injectable()
export class OrderService {
  constructor(private orderApi: OrderApi) {}

  saveOrder(order: Order): Promise<void> {
    return this.orderApi.saveOrder(order);
  }

  updateOrder(order: Order): Promise<void> {
    return this.orderApi.updateOrder(order);
  }
}
