export interface Order {
  id?: string;
  groupOrderId?: string;
  userId?: string;
  drink: string;
  quantity: number;
  size: Size;
  ice: Ice;
  sugar: Sugar;
  toppings: Topping[];
  createdAt?: string;
}

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum Topping {
  GrassJelly = 'grassJelly',
  Pearl = 'pearl',
  CoconutJelly = 'coconutJelly'
}

export enum Sugar {
  No = 'no',
  Slight = 'slight',
  Half = 'half',
  Full = 'full'
}

export enum Ice {
  No = 'no',
  Slight = 'slight',
  Half = 'half',
  Full = 'full'
}
