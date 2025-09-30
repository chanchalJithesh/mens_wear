export type Size = "S" | "M" | "L" | "XL" | number;
export type Category = "casual" | "formal" | "sportswear" | "accessories";

export interface Product {
  id: string;
  title: string;
  price: number;
  size: Size;
  category: Category;
  stock: number;
}
