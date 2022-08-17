import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  // add product to cart method
  addToCart(product: Product) {
    this.items.push(product);
  }

  // get cart items method
  getItems() {
    return this.items;
  }

  // clear cart method
  clearCart() {
    this.items = [];
    return this.items;
  }
}
