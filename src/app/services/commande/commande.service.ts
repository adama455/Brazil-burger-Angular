import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EtatCommande, UpdateCommande } from 'src/app/models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  commande_url:string = 'http://127.0.0.1:8000/api/commandes/';

  constructor( private http:HttpClient) { }

  getCommandeObs(){
    return this.http.get<any>(this.commande_url);
  }
  getOneCommande(id:number):Observable<any>{
    return this.http.get<any>(this.commande_url+id);
  }


  modifierCommande(id:number,action:EtatCommande, commandePut?: UpdateCommande | { etat:string }) {
    let body!:EtatCommande | { etat:string};
    const headers={"Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjAxMjAzODUsImV4cCI6MTY2MDE1NjM4NSwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZGlvdWZAZ21haWwuY29tIn0.QrtxKZp3ai71WS-UBR4QFhvjnjja4CIECWvbiNnED8k6q-qn2hBGbw7LItebXS8JBpmnZxGndjyGzD-42Gp5M51cxPEtb1Qofih_ORk08BJMdY_Jg3OEE5hV46f-Fsw6o9ImflU6lpXLV6StMzUcN9Q-F0CW7dyXq3yJHx_GvlmllCXp7wtFyW07R5XidbKy4gbk-P8TmtMm37SXIRxMImYQ3ewteWH0qmJwEwHVeQoC7Mfu6XummbW2vLn94WBzUOadHhax9dJW_6hela07WthLnJLq1gOrVOY301LX5EBYM80Cxxg_Mtchdq1bBqnqVY48vLYZ1yvak2MZmh_xjw"}
    if (action==EtatCommande.modifier) {
      if (commandePut) {
        body = commandePut;
      }else {
        return
      }
    }else{
      body = {etat: action.toString()}
    }

    this.http.put<{etat:string}>(this.commande_url + id, body, {headers}).subscribe();
  }

  etat(commande:UpdateCommande){
    if (commande.etat==EtatCommande.enAttente.toString()) {
      return "en attente";
    }else if(commande.etat==EtatCommande.valider.toString()){
      return "validé";
    }else if(commande.etat==EtatCommande.enCousDeLivraison.toString()){
      return "en cours de livraison";
    }else if(commande.etat==EtatCommande.modifier.toString()){
      return "modifié";
    }else if(commande.etat==EtatCommande.annuler.toString()){
      return "annulé";
    }else if(commande.etat==EtatCommande.enCousDeLivraison.toString()){
      return "en cours";
    }else{
      return "terminé";
    }

  }

  
}
