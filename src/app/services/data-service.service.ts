import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable} from 'rxjs';
import {IBoisson, IBurger, ICatalogue, IComplement, IFrite, IMenu} from '../catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private readonly catalogue_url = 'http://127.0.0.1:8000/api/catalogues';
  private readonly complement_url = 'http://127.0.0.1:8000/api/complements';
  private readonly produit_url = 'http://127.0.0.1:8000/api/produits/';

  cpt:number=0;

  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { }

  getProduitsObs():Observable<ICatalogue>{
    return this.http.get<ICatalogue>(this.catalogue_url)
    // console.log
  }
  getComplementsObs():Observable<IComplement>{
    return this.http.get<IComplement>(this.complement_url);
    console.log;  
  }

  getSingleProduitObs(id:number):Observable<IMenu>{
    return this.http.get<IMenu>(this.produit_url+''+id)
  }

  getAllProduitsObs():Observable<IMenu | IBurger>{
    return this.http.get<IMenu |IBurger>(this.produit_url);
  }
 

  addCart(){
  //  cpt+= this.cpt;
    return ++this.cpt;
  }
/* 
* params
  * params:produit
  * fonction pour convertir l'image
*/
  convertImg(param: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64, "+param); 
  }

}
