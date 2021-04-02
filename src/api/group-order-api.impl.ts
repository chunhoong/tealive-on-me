import { Injectable } from '@angular/core';
import { GroupOrder } from '@group-order/group-order';
import { GroupOrderApi } from './group-order-api';

@Injectable()
export class GroupOrderApiImpl extends GroupOrderApi {
  saveGroupOrder(groupOrder: GroupOrder): Promise<void> {
    throw new Error('Method not implemented.');
  }
  fetchGroupOrders(): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
  updateGroupOrder(groupOrder: GroupOrder): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeGroupOrder(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
