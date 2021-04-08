import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  templateUrl: './order-preview.page.html',
  styleUrls: ['./order-preview.page.scss']
})
export class OrderPreviewPage implements OnInit {
  order: Order;
  buttonLabel: string;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.order = await this.orderService.findOrder(id);
    this.buttonLabel = this.hasRightToEdit() ? 'Update order' : '';
  }

  hasRightToEdit(): boolean {
    return false;
  }

  handleUpdate(order: Order) {
    this.orderService.updateOrder(order);
  }
}
