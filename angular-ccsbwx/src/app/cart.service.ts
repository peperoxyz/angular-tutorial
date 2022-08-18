import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>("/assets/shipping.json");
  }
}
