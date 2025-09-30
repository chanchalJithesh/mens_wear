export type OrderStatus = "pending" | "processing" | "delivered" | "cancelled";

export interface Order {
  orderId: string;
  userId: string;
  products: string[]; 
  totalAmount: number;
  status: OrderStatus;
}

export type OrderLog = `Order_${string}_${Order['status']}`;

export type ValidDiscount<T> = T extends number
  ? T extends 0 ? never : T extends number ? T : never
  : never;
