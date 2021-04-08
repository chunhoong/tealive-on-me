import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GroupOrder } from './group-order';

@Component({
  selector: 'group-order',
  templateUrl: './group-order.component.html',
  styleUrls: ['./group-order.component.scss']
})
export class GroupOrderComponent {
  @Input() groupOrder: GroupOrder;

  constructor(private router: Router) {}

  handleOrder() {
    this.router.navigateByUrl(`/order/create?groupOrderId=${this.groupOrder.id}`);
  }

  handleView() {
    this.router.navigateByUrl(`/order/view?groupOrderId=${this.groupOrder.id}`);
  }
}
