import { GroupOrder } from "@group-order/group-order";

export abstract class GroupOrderApi {
  abstract saveGroupOrder(groupOrder: GroupOrder): Promise<void>;
  abstract fetchGroupOrders(): Promise<GroupOrder[]>;
  abstract updateGroupOrder(groupOrder: GroupOrder): Promise<void>;
  abstract removeGroupOrder(id: string): Promise<void>;
}