import { Injectable } from '@angular/core';
import { GroupOrderApi } from '@api/group-order-api';
import { GroupOrder } from './group-order';

@Injectable()
export class GroupOrderService {
  constructor(private groupOrderApi: GroupOrderApi) {}

  saveGroupOrder(groupOrder: GroupOrder): Promise<void> {
    return this.groupOrderApi.saveGroupOrder(groupOrder);
  }

  fetchGroupOrders(): Promise<GroupOrder[]> {
    return this.fetchGroupOrders();
  }

  updateGroupOrder(groupOrder: GroupOrder): Promise<void> {
    return this.groupOrderApi.updateGroupOrder(groupOrder);
  }

  removeGroupOrder(id: string): Promise<void> {
    return this.groupOrderApi.removeGroupOrder(id);
  }
}
