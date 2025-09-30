import { Order, OrderStatus, OrderLog, ValidDiscount } from "../models/Order";

const ordersDB: Order[] = [];

export class OrderService {

  // Place an order with optional discount validated via conditional type
  placeOrder<T extends number>(
    orderId: string,
    userId: string,
    products: string[],
    totalAmount: number,
    discount?: ValidDiscount<T>
  ): Order {
    const discountedAmount = discount ? totalAmount - discount : totalAmount;

    const newOrder: Order = {
      orderId,
      userId,
      products,
      totalAmount: discountedAmount,
      status: "pending",
    };
    ordersDB.push(newOrder);
    return newOrder;
  }

  updateStatus(orderId: string, status: OrderStatus): Order | undefined {
    const order = ordersDB.find(o => o.orderId === orderId);
    if (!order) return undefined;
    order.status = status;
    return order;
  }

  getOrderLog(order: Order): OrderLog {
    return `Order_${order.orderId}_${order.status}` as OrderLog;
  }
}
