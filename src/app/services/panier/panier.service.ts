import { HttpClient } from '@angular/common/http';
import { TmplAstBoundAttribute } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { IBurger, IMenu } from 'src/app/models/catalogue.model';
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
  ldc:Array<any> =[];


  getCommandeObs(){
    return this.http.get<any>(this.commande_url);

  }

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
    const headers={"Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk4MTkyNDQsImV4cCI6MTY1OTg1NTI0NCwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoibG9tYmF5ZUBnbWFpbC5jb20ifQ.A6VAUYVFz5Ygdf2TSpEHR7jnVggHxmBookyVztFFfC9CQnnk16PbUpuC_xdyC97jxrhzqLaJPFM9rrHgBJCXVfR0abWIPLkLdTHprYrTP8HgaWCP-9MYPv5dNhi_RhrhfKDPyquBOqX3lsRB6IIxKmQfiwTGbeVVbxkI7s-qgBEc2N6BvisFVv1h3p-S-5j8lpwymWiFgEQ5ZBi-y751TsmyTD8AV3MqYh_tudKpFq8Vb541wbbLD3IQmUr9q01t6IceVnL_IlqC-xT2-1L1Fl3qLyvNJomE-95QljnmHc1ZKTBQkvmbX-C7DJ-XVpa7o1Mq-g3FRxbjmn3t-GFNmQ"}
    this.http.post<Commande>(this.commande_url,body,{headers}).subscribe();
  }

  getPanier(){
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

 // annulerCommande(id:number, commande: UpdateCommande | {statut:string}){
  //   this.http.put<UpdateCommande>(this.commande_url + "/" + id,commande).subscribe();
    
  // } 
  
}
