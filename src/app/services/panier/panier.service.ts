import { TmplAstBoundAttribute } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { IBurger, IMenu } from 'src/app/catalogue.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {

  prix: number = 0;

  constructor() {
    let existingCartItems = JSON.parse(
      localStorage.getItem('products') || '[]'
    );
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject: any = new BehaviorSubject<IBurger[] | IMenu[]>([]);
  // tableau==============================================
  items$ = this.itemsSubject.asObservable();
  quantity = this.items$.quantity;
  

  // Fornction pour incrementer la quantite du produit clicker au niveau du panier
  putToPanier(product: any, action: 'in' | 'out' = 'in') {
    this.items$
      .pipe(
        take(1),
        map((products: IBurger[] | IMenu[]) => {
          let tab: IBurger[] | IMenu[] = JSON.parse(
            localStorage.getItem('products') || '[]'
          );
          // console.log(tab);

          product.quantity = 1;
          if (action === 'in') {
            if (tab) {
              let trouver:IBurger|undefined = tab.find((param: { id: number }) => param.id === product.id);
              if (!trouver) {
                products.push(product);
              } else {
                products.forEach((element) => {
                  if (element.id === product.id) {
                    element.quantity++;
                  }
                });
              }
            }
          } else {
            // suppression au niveau du panier-------------------------------------------
            products.splice(product, 1);
          }
          localStorage.setItem('products', JSON.stringify(products));
        })
      ).subscribe();
  }

  exixtInTab(tab: IBurger[] | IMenu[], idProd: number) {
    return tab.find((prod) => {
      return prod.id === idProd;
    });
  }

  getItems(): Observable<IBurger[] | IMenu[]> {
    return this.items$;
  }

  // prix total du panier============= Résumer commande =============
  getPrixTotal(){
    let prixTotal=0;
    this.items$.subscribe((items:any) =>{
      items.forEach((item:any) =>{
        prixTotal+=item.prix*item.quantity;
      })
      localStorage.setItem('products', JSON.stringify(items));
    })
    return prixTotal;
  }

  // prix ligne de commande====================
  cmdeLinePrice(product: IBurger | IMenu, qte:any){
    this.items$
    .pipe(
      take(1),
      map((products: IBurger[] | IMenu[]) => {
        products.forEach(element => {
          if (element.id === product.id){
            element.quantity = qte;
          }
          localStorage.setItem('products', JSON.stringify(products));
        });
      } 
    )).subscribe();
  }

 
}
