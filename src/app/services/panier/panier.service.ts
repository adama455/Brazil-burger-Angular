import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { IBurger, IMenu } from 'src/app/catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products' )||'[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<IBurger[]|IMenu[]>([]);
  // tableau================================
  items$ = this.itemsSubject.asObservable();

  addToPanier(product: IBurger & IMenu) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe(); 
  }

  // clearCart(items$) {
  //   this.items$ = [];

  //   localStorage.removeItem("cart_items")
  // }

  // removeItem(item) {
  //   const index = this.items.findIndex(o => o.id === item.id);

  //   if (index > -1) {
  //     this.items.splice(index, 1);
  //     this.saveCart();
  //   }
  // }
}
