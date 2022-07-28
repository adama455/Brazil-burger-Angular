import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable} from 'rxjs';
import {ICatalogue} from '../catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private readonly url = 'http://127.0.0.1:8000/api/catalogues'
  private readonly urlId = 'http://127.0.0.1:8000/api/produits/'
  cpt:number=0;


  constructor(private http:HttpClient) { }

  getProduitsObs():Observable<ICatalogue>{
    return this.http.get<ICatalogue>(this.url)
  }
  getSingleProduitObs(id:number):Observable<any>{
    return this.http.get<any>(this.urlId+''+id)
  }



  addCart(){
    //  cpt+= this.cpt;
     return ++this.cpt;
    }

}
