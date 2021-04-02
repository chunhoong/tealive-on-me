import { Component } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage {
  constructor(private orderService: OrderService) {}

  handleSubmit(order: Order) {}
}
