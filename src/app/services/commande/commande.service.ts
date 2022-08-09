import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { EtatCommande, UpdateCommande } from 'src/app/models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  commande_url:string = 'http://127.0.0.1:8000/api/commandes';

  constructor( private http:HttpClient) { }


  modifierCommande(id:number,action:EtatCommande, commandePut?: UpdateCommande | { etat:string }) {
    let body!:EtatCommande | { etat:string};
    const headers={"Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjAwNTQzNzQsImV4cCI6MTY2MDA5MDM3NCwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZGlvdWZAZ21haWwuY29tIn0.ZeB7bdVv3LHwQxqatftlg8eWe__3s9uIE3YDjMyh0P_ykx-nfvAl7EjdtDCdN1OQWBjDbRqMOzRm4d8QR3c1XZUf1XNwjBEQTiCm6gA3WCpRvPkG1w6U57eCvsMbwSrQ4QLc-YdgIvN_e1ILfZTEDo8BGrAg6RaEq2k7Wh4DZiDBQkllp6AyVrhEMPyHoCDfeaiIc2_wErzkyMAWxSKYPIWRE20olXgYNIB34E71Nk2w52SpOkWr0I0OBv-xcM0y4onOOkRwcXldJ0KWjnxWSDDUAme2fpbCGrUARw6bs7yBUSRv0gaNyncjJHE0rMBN-TBRpcvFyYIBKOoHnpv_-A"}
    if (action==EtatCommande.modifier) {
      if (commandePut) {
        body = commandePut;
      }else {
        return
      }
    }else{
      body = {etat: action.toString()}
    }

    this.http.put<{etat:string}>(this.commande_url + "/" + id, body, {headers}).subscribe();
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
    }else{
      return "terminé";
    }

  }

  
}
