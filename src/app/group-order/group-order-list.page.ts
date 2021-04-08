import { Component, OnInit } from '@angular/core';
import { GroupOrder } from './group-order';
import { GroupOrderService } from './group-order.service';

@Component({
  templateUrl: './group-order-list.page.html',
  styleUrls: ['./group-order-list.page.scss'],
})
export class GroupOrderListPage implements OnInit {
  groupOrders: GroupOrder[];

  constructor(private groupOrderService: GroupOrderService) { }

  async ngOnInit() {
    this.groupOrders = await this.groupOrderService.fetchGroupOrders();
  }

}
