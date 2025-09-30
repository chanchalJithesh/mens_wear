import { Product } from "../models/Product";

type SalesRecord = Record<Product["category"], number>;

export class AdminDashboard {
  totalSales: SalesRecord = {
    casual: 0,
    formal: 0,
    sportswear: 0,
    accessories: 0,
  };

  calculateSales(orders: { products: Product[] }[]) {
    for (const order of orders) {
      for (const product of order.products) {
        this.totalSales[product.category] += product.price;
      }
    }
  }

  getTopSellingProducts(products: ReadonlyArray<Product>): ReadonlyArray<Product> {
    return [...products]
      .sort((a, b) => b.price - a.price)
      .slice(0, 3);
  }
}
