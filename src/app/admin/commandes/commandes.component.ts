import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { EtatCommande, GetCommande, IZone } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes:GetCommande[]=[];
  searchDate = this.commandeService.formateDateToday();
  searchCmd!:number
  zones:IZone[]=[];
  zone!: IZone;

  constructor(
    private dataService: DataServiceService,
    private commandeService:CommandeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getCommandeObs().subscribe(data => {
      console.log(data);
      this.commandes=data;  
      this.commandes.reverse();
    });

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
    
  }

  annulerCommande(commande:GetCommande){
    // const annuler=document.getElementById('annuler');
    this.commandeService.modifierCommande(commande.id,EtatCommande.annuler);
    location.reload();
  }
  validerCommande(commande:GetCommande){
    this.commandeService.modifierCommande(commande.id,EtatCommande.terminer);
    location.reload();
  }

  disableBtnAnnuler(commande:GetCommande){
    const etat:string[]=['enCoursDeLivraison','annuler','valider','enCours'];
    if (etat.includes(commande.etat)) {
      return true;  
    }
    return false;
  }
  
  // fonction pour aller dans detail commande
  detailCommande(commande:GetCommande){
    this.router.navigateByUrl("admin/commandes/" +commande.id);
  }

  // changeColor(newColor:any) {
  //   var elem = document.getElementById('annuler');commandescommandescommandes
  // }

}
