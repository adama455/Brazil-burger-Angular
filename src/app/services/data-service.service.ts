import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable} from 'rxjs';
import {IBoisson, IBurger, ICatalogue, IComplement, IFrite, IMenu} from '../models/catalogue.model';
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
  private readonly zone_url='http://127.0.0.1:8000/api/zones/';
  private readonly quartier_url='http://127.0.0.1:8000/api/quartiers';
  private readonly client_url:string = 'http://127.0.0.1:8000/api/clients/';
  private readonly boissons_url:string = 'http://127.0.0.1:8000/api/boissons';
  private readonly burger_url:string = 'http://127.0.0.1:8000/api/burgers';
  private readonly menu_url:string = 'http://127.0.0.1:8000/api/menus';
  private readonly commande_url:string = 'http://127.0.0.1:8000/api/commandes';


  

  // Tableau qui stock pour chaque boisson sa somme et sa quantite:::::::::::::::
 
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { }


  getCommandeObs(){
    return this.http.get<any>(this.commande_url);
  }
  getOneCommande(id:number):Observable<any>{
    return this.http.get<any>(this.commande_url+id);
  }


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
  getOneZoneObs(id:number):Observable<any>{
    return this.http.get<any>(this.zone_url+id);
  }
  getQuartiersObs():Observable<any>{
    return this.http.get<any>(this.quartier_url);
    // console.log;
  }
  getClientsObs():Observable<any>{
    return this.http.get<any>(this.client_url);
  }

  getOneClient(id:number):Observable<any>{
    return this.http.get<any>(this.client_url+id);
  }
  // getOneClient(id:number):Observable<any>{
  //   return this.http.get<any>(this.client_url + "/" +id);
  // }

  getBoissonObs():Observable<any>{
    return this.http.get<any>(this.boissons_url);
    console.log;
  }

// return un burger:::::::::::::::::::::
  getBurgersObs():Observable<IBurger>{
    return this.http.get<IBurger>(this.burger_url);
    console.log;
  }

  getOnBurgers(id:string,burgers:IBurger[]):IBurger
  { 
    const burger = burgers.find((burger)=>
    {
      return burger.id.toString()===id
    }
    );
    if (!burger) {
      throw new Error('Burger not found');
    }else{
      return burger;
    }
  }
  // return un menu:::::::::::::::::::::
  getMenusObs():Observable<any>{
    return this.http.get<any>(this.menu_url);
    console.log;
  }
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

  
  // tabQteBoisson:{"qteTotal":number,"somQte":number}[]=[];
  // qteTotalB:number=0;

  // updateQte(n:number){
  //   return this.qteTotalB += n;
  // }

}
