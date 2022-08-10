import { HttpClient } from '@angular/common/http';
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
    const headers={"Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjAxMjAzODUsImV4cCI6MTY2MDE1NjM4NSwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZGlvdWZAZ21haWwuY29tIn0.QrtxKZp3ai71WS-UBR4QFhvjnjja4CIECWvbiNnED8k6q-qn2hBGbw7LItebXS8JBpmnZxGndjyGzD-42Gp5M51cxPEtb1Qofih_ORk08BJMdY_Jg3OEE5hV46f-Fsw6o9ImflU6lpXLV6StMzUcN9Q-F0CW7dyXq3yJHx_GvlmllCXp7wtFyW07R5XidbKy4gbk-P8TmtMm37SXIRxMImYQ3ewteWH0qmJwEwHVeQoC7Mfu6XummbW2vLn94WBzUOadHhax9dJW_6hela07WthLnJLq1gOrVOY301LX5EBYM80Cxxg_Mtchdq1bBqnqVY48vLYZ1yvak2MZmh_xjw"}
    this.http.post<Commande>(this.commande_url,body,{headers}).subscribe();
  }

  getPanier(){
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
 
  
}
