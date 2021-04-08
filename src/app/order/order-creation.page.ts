import { Component } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  templateUrl: './order-creation.page.html',
  styleUrls: ['./order-creation.page.scss']
})
export class OrderCreationPage {
  constructor(private orderService: OrderService) {}

  handleSubmit(order: Order) {
    this.orderService.saveOrder(order);
  }
}
