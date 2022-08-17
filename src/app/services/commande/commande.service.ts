import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EtatCommande, FormatLiv, GetCommande, ILivraison, UpdateCommande } from 'src/app/models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  commande_url:string = 'http://127.0.0.1:8000/api/commandes/';
  livreur_url:string  = 'http://127.0.0.1:8000/api/livreurs';
  livraison_url:string = 'http://127.0.0.1:8000/api/livraisons';
  oneLivraison_url:string = 'http://127.0.0.1:8000/api/livraisons/';
  commandeALivre:GetCommande[]=[];



  constructor( private http:HttpClient) { }

  getLivreursObs(){
    return this.http.get<any>(this.livreur_url);
  }
  getLivraisonsObs(){
    return this.http.get<any>(this.livraison_url);
  }
  getOneLivraison(id:number):Observable<any>{
    return this.http.get<any>(this.oneLivraison_url+id);
  }
  getCommandeObs(){
    return this.http.get<any>(this.commande_url);
  }
  getOneCommande(id:number):Observable<any>{
    return this.http.get<any>(this.commande_url+id);
  }


  modifierCommande(id:number,action:EtatCommande, commandePut?: UpdateCommande | { etat:string }) {
    let body!:EtatCommande | { etat:string};
    const headers={"Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjA3MjQxMjIsImV4cCI6MTY2NDMyNDEyMiwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZGlvdWZAZ21haWwuY29tIn0.GqCo6-MB_2WO5nOofYeJW5R6yRFVo7qScJM6-jDh5wlqTz1XQ5zbd9XPW_yG0rRmpRYgI_1ww903n-4la6Qa0btMSog-2RElHcLFOEmWfDIDVOslbD-eGCHzxsG_OeFV9CNpHcHxEkeYF65liUojFCYiSGiAwSoJ3ilFBBLrVrqefE9Et8ZlCcmq_Aj_zs8jRL4OkuVbez7Z7Tu2P6J9v2C_3svyn13TPq9Xq9CbWGNIXFBU38nBZDPghoVuYJid9AeVleCmNKRL4xD2NEEOiDmED8YTwm2oQmpM56SxAZ9q07--2qb6MqvQm8IabdG-QxY5WhxUjvdhG0uc1pXCOA"}
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
      return "annuler";
    }else if(commande.etat==EtatCommande.livrer.toString()){
      return "livré";
    }else{
      return "terminer";
    }
    return "en cours";

  }

  // ajouter dans livraison==================
  ajouterDansLivraison(commande:GetCommande){
    this.commandeALivre.push(commande);
  }
  // retirer dans livraison==================
  retirerDansLivraison(commande:GetCommande){
    this.commandeALivre.splice(this.commandeALivre.indexOf(commande,1));
  }

  postLivraison(body:FormatLiv){
    const headers={"Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjA3MjQyMDksImV4cCI6MTY2NDMyNDIwOSwicm9sZXMiOlsiUk9MRV9HRVNUSU9OTkFJUkUiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiYWRhbWFAZ21haWwuY29tIn0.H9SlZntmLCrNhmAx8ozRUGc1c525kt2fhpmZvETEKJmgRtBUQVMF4C9HGms9IO5je_UO9bKO6D-Co9PU7heQxmOdGy-KLmSGjotGP21hJKcO309idy0q-T-X_z4JcOwuEyPajpzFWQICnKRF3ywmWauXhsdFdznkgZLJzTE_1ag4rX2q5Lp375i5hOULtfUYDfnWU7aTSQYvoXYVcIjOYAT-GTvHamwE_lMSOx9knG0zd7Fgw4yzSnz95qnPvPFSMtmXe-PIb5pegHB4Gao5_EjX5I-AGl9zC2P8dR2-LPvAVZ8f6z5fmycE7XYZ8dOEAPqBir6cwUB-T9RZ2C_pew"}
    this.http.post<any>(this.livraison_url,body,{headers}).subscribe();
  }

  // filtre date commande:::::::::::::::::::::
  formateDateToday(){
    let date=new Date();
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;
    //2022-08-10
  }
}
