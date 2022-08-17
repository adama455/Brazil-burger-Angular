import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs';
import { IZone } from 'src/app/models/catalogue.model';
import { EtatCommande, FormatCmde, FormatLiv, GetCommande, ILivraison, ILivreur } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-new-livraison',
  templateUrl: './new-livraison.component.html',
  styleUrls: ['./new-livraison.component.css']
})
export class NewLivraisonComponent implements OnInit {

  searchCmd!:number
  zones:IZone[]=[];
  zone!: IZone;
  tousLesCommandes:GetCommande[]=[];
  commande!:GetCommande;
  livreurs:ILivreur[]=[];
  livreurrs: ILivreur[]=[];
  id:number = +this.route.snapshot.params['id'];
  idLivreur: any;
  idZone:any
  disabled:boolean=false
  
  constructor(private dataService:DataServiceService,private commandeService:CommandeService, private route: ActivatedRoute) { }

  nbreCmdeChoisie(){
    return this. commandeService.commandeALivre.length
  }
  
  ngOnInit(): void {
    /* ***************************** par zone ************************/
    this.dataService.getZonesObs().pipe(
      take(1),
      map((data:any) =>{
        data.filter((z:IZone)=>{
          // this.idZone = z.id;
          if (z.commandes.length > 0) {
            // console.log(z.commandes);  
            // this.tousLesCommandes=[...z.commandes]
            this.zones.push(z);
            // console.log(this.tousLesCommandes);
          }      
        })
      })
      ).subscribe();
      
      /* ***** par commandes **** */
      this.dataService.getCommandeObs().pipe(
        take(1),
        map((data:any) =>{
          data.filter((z:GetCommande)=>{
          if (z.etat =='terminer') {
            // console.log(z.commandes);
            this.tousLesCommandes.push(z);
            this.tousLesCommandes.reverse();
            // this.zones.push(z);
            // console.log(this.tousLesCommandes);
          }     
        })
      })
      ).subscribe();
      
      this.commandeService.getLivreursObs().pipe(
        take(1),
        map((liv)=>{  
          this.livreurs=liv;
          this.livreurs.forEach((l)=>{
            if (l.is_disponible && l.etat==1) {
              this.livreurrs.push(l); 
              this.livreurrs.reverse();
            }
        })
        // console.log(this.livreurs);
      })
      ).subscribe();
      
    } 
    
    
    // Récuperation Id du livreur:::::::::::::::::
    idLivreurSelectionne(input:HTMLInputElement){
      return this.idLivreur=input.value;
      // console.log(this.idLivreur);  
    }
    // Récuperation Id du zone:::::::::::::::::
    idZoneLiv(select:HTMLSelectElement){
      console.log(this.idZone=select.value);
      
      return this.idZone=select.value;

    }


    
    // Debut Validation livraison client:::::::::::::::::::::::::::
    addLivraison(){
      // console.log(this.idLivreurSelectionne(input));  
      let tabLiv:string[]=[]; 
      // console.log(this.commandeService.commandeALivre); 
      this.commandeService.commandeALivre.forEach((cmd)=>{
        tabLiv.push("/api/commandes/"+cmd.id);
        // console.log(tabLiv);
      })
      let body:FormatLiv = {
        "livreur":'/api/livreurs/'+this.idLivreur,
        "commandes":tabLiv,
        "zone":'/api/zones/'+this.idZone,
      }
      console.log(body);
      console.log(this.nbreCmdeChoisie);
      // console.log(this.commandeService.commandeALivre.length);  
      this.commandeService.postLivraison(body);
    }

    // desactiver et activer le Valider Livraison:::::::::::::::::::::::::::::
    disableBtnValider(){
      if (!this.idLivreur) {
        return true;  
      }
      return false;
    }
    disableBtnChoisirLiv(){

      if (this.commandeService.commandeALivre.length == 0) {
        return true;
      }
      return false;
    }

     // Ajouter et retirer Commandes à livrer===============================
     ajoutEtRetraitLivraison(commande:GetCommande,input:HTMLInputElement){
      if (input.checked) {
        // this.idZone = commande.zone.id;
        this.commandeService.ajouterDansLivraison(commande)
        
      }else{
        this.commandeService.retirerDansLivraison(commande)
      }
      // console.log(this.commandeService.commandeALivre);  
    }

}
