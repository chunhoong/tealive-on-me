import { Injectable } from '@angular/core';
import listGroupOrder from '@assets/json/listGroupOrder.json';
import { GroupOrder } from '@group-order/group-order';
import { GroupOrderApi } from './group-order-api';

@Injectable()
export class GroupOrderApiMock extends GroupOrderApi {
  saveGroupOrder(groupOrder: GroupOrder): Promise<void> {
    throw new Error('Method not implemented.');
  }
  fetchGroupOrders(): Promise<GroupOrder[]> {
    return Promise.resolve(listGroupOrder);
  }
  updateGroupOrder(groupOrder: GroupOrder): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeGroupOrder(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
