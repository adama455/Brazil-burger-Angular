import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { IBurger, IMenu } from 'src/app/catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  prix:number=0;
  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products' )||'[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject:any = new BehaviorSubject<IBurger[]|IMenu[]>([]);
  // tableau==============================================
  items$ = this.itemsSubject.asObservable();

  
  putToPanier(product: IBurger & IMenu,action: "in" | "out" = "in") {
    this.items$.pipe(
      take(1),
      map((products:any) => {
        if (action === "in") {
          products.push(product); 
        }else{
          products.splice(product, 1);
        }
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }
   
  getItems() {
    return this.items$;
  } 

  getPrix(product: IBurger & IMenu){
    this.prix += product.prix;
  }
  getPrixTotal(){
    return this.prix;
  }


  // addToPanier(product: IBurger & IMenu) {
  //   this.items$.pipe(
  //     take(1),
  //     map((products:any) => {
  //       products.push(product);
  //       localStorage.setItem('products', JSON.stringify(products));
  //     }),
  //   ).subscribe(); 
  // }
    //removeToPanier(product:any) {
    //   this.items$.pipe(
    //     take(1),
    //     map((products:any) => {
    //       products.splice(product, 1);
    //       localStorage.setItem('products', JSON.stringify(products));
    //     }),
    //   ).subscribe(); 
  // }
  
}
