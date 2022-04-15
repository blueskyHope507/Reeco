export type OrderProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  status: number;
};

export type Order = {
  id: string;
  supplier: string;
  shopping_date: string;
  is_approve: string;
  products: Array<OrderProduct>;
};
