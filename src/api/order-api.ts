import { Order } from '@order/order';

export abstract class OrderApi {
  abstract saveOrder(order: Order): Promise<void>;
  abstract findOrder(id: string): Promise<Order>
  abstract fetchOrders(groupOrderId: string): Promise<Order[]>;
  abstract updateOrder(order: Order): Promise<void>;
  abstract removeOrder(id: string): Promise<void>;
}
