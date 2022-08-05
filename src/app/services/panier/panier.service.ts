import { HttpClient } from '@angular/common/http';
import { TmplAstBoundAttribute } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { IBurger, IMenu } from 'src/app/catalogue.model';
import { Commande } from 'src/app/models/commande';

@Injectable({
  providedIn: 'root',
})
export class PanierService {

  prix: number = 0;

  constructor( private http:HttpClient) {
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

  commande_url:string = 'http://127.0.0.1:8000/api/commandes';

  ldc:Array<any> =[]
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

 
  getLineComde(){
    this.items$.subscribe((produits:any) => {
      produits.forEach((product: any) =>{
        this.ldc.push({
          "produit":product,
          "quantiteCmde":product.quantiteCmde,
        });
      })
    })
    return this.ldc;
  }

  postCommande(body:Commande){
    const headers={"Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk3MjAzNzAsImV4cCI6MTY1OTc1NjM3MCwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZGlvdWZAZ21haWwuY29tIn0.bghxC2p6i54yqBpgzv7CZZ4gww5CJcbgNxzbup_e2a2HuailcTXc3wvLg_CFluJ-BFPMX68mLfk47NVtiRosA-PhbZpyzo_g6_YCQ4ndCQksT4sloZD3UCjstwjazNVkbk9Net3oX5pYNRBmJ-cfD1zxcfqWiWyplQOVL90ndCoFV6FXpzCL5yvUjDZVB1Le6n3eLgmAsWZtqD0xm8uNRY6sTxkJUOsvw-mO5VIdWfRmpJMqKBYlZTa4dEPZtjbklZInVnHtslnoxK4s7iTOJi9DZDuawE5BdAQ-29S20vh266A8BdcnxrYTHKEZR-P2A0vJj_duHh7srqOsHUV00w"}
    this.http.post<Commande>(this.commande_url,body,{headers} ).subscribe()
  }

  getPanier(){
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  // postCommande(){
  //   this.http.post<any>(this.commande_url, { 
  //     "produits":this.getLineComde(),
  //     "zone":"/api/zones/7",
  //     "client":"api/clients/1"

  //    }).subscribe(
  //     data=>{
  //       this.postId=data.id
  //     })
  //   }
  
}
