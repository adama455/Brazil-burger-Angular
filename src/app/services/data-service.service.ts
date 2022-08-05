import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable} from 'rxjs';
import {IBoisson, IBurger, ICatalogue, IComplement, IFrite, IMenu} from '../catalogue.model';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  burgers!:IBurger[];
  menus!:IMenu[];
  produits!:ICatalogue[];
  cpt:number=0;



  private readonly catalogue_url:string = 'http://127.0.0.1:8000/api/catalogues';
  private readonly complement_url:string = 'http://127.0.0.1:8000/api/complements';
  private readonly zone_url='http://127.0.0.1:8000/api/zones';
  private readonly quartier_url='http://127.0.0.1:8000/api/quartiers';
  // private readonly frites_url:string = 'http://127.0.0.1:8000/api/frites';
  private readonly boissons_url:string = 'http://127.0.0.1:8000/api/boissons';

  // Tableau qui stock pour chaque boisson sa somme et sa quantite:::::::::::::::
  tabQteBoisson:{"qteTotal":number,"somQte":number}[]=[];
  qteTotalB:number=0;

  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { }

  getProduitsObs():Observable<any>{
    return this.http.get<any>(this.catalogue_url)
    // console.log();
  }
  getComplementsObs():Observable<any>{
    return this.http.get<any>(this.complement_url);
    // console.log;  
  }
  getZonesObs():Observable<any>{
    return this.http.get<any>(this.zone_url);
    // console.log;
  }
  getQuartiersObs():Observable<any>{
    return this.http.get<any>(this.quartier_url);
    // console.log;
  }

  getBoissonObs():Observable<any>{
    return this.http.get<any>(this.boissons_url);
    console.log;
  }

// return un burger:::::::::::::::::::::
  // getOnBurgers(id:string,burgers:IBurger[]):IBurger
  // { 
  //   const burger = burgers.find((burger)=>
  //   {
  //     return burger.id.toString()===id
  //   }
  //   );
  //   if (!burger) {
  //     throw new Error('Burger not found');
  //   }else{
  //     return burger;
  //   }
  // }
  // return un menu:::::::::::::::::::::
  
  getOnMenus(id:string,menus:IMenu[]):IMenu {
    const menu = menus.find((menu)=>
    {
      return menu.id.toString()===id
    });
    if (!menu) {
      throw new Error("Menu not Found");
    }else{
      return menu;
    }
  }

  // getSingleProduitObs(id:number):Observable<IMenu>{
  //   return this.http.get<IMenu>(this.produit_url+''+id)
  // }

  // getAllProduitsObs():Observable<IMenu | IBurger>{
  //   return this.http.get<IMenu |IBurger>(this.produit_url);
  // }
 
  addCart(){
  //  cpt+= this.cpt;
    return ++this.cpt;
  }

  convertImg(param: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64, "+param); 
  }

  // increment(n:number){
  //   return this.qteTotal 
  //   // console.log(this.qteTotal );
    
  // }
  // decrement(){
  //   return this.qteTotal --
  //   // console.log(this.qteTotal );
    
  // }

  // 

  updateQte(n:number){
    return this.qteTotalB += n;
  }

}
