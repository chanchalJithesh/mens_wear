import { Product } from "../models/Products";

type ProductUpdateDTO = Partial<Omit<Product, "id">>;

export default class ProductService {
  private products: Product[] = [];

  addProduct(product: Product, userRole: "admin" | "customer") {
    if (userRole !== "admin") throw new Error("Unauthorized");
    this.products.push(product);
    return product;
  }

  updateProduct(id: string, updates: ProductUpdateDTO) {
    const product = this.products.find(p => p.id === id);
    if (!product) throw new Error("Product not found");
    Object.assign(product, updates);
    return product;
  }

  sortProducts<K extends keyof Product>(key: K, ascending = true): Product[] {
    return this.products.sort((a, b) => 
      ascending ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1)
    );
  }
}
