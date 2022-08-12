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
  constructor(private dataService:DataServiceService,private commandeService:CommandeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* ***************************** par zone ************************/
    this.dataService.getZonesObs().pipe(
      take(1),
      map((data:any) =>{
        data.filter((z:IZone)=>{
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
      "zone":'/api/zones/1',
    }
    console.log(body);
    
    this.commandeService.postLivraison(body); 
  }

  // disableBtn(btn:HTMLInputElement){
  //   if (btn.checked) {
  //     return true;
  //   }
  //   return false;
  // }

  // commandeTerminer(commande:GetCommande){
  //   if(commande.etat==EtatCommande.terminer.toString()){
  //     return true;   
  //   }
  //   return false;
  // }

  // fonction pour aller dans detail commande

  // detailCommande(zone:IZone){
  //   this.router.navigateByUrl("admin/commandes/zone/" + zone.id);
  // }

}
