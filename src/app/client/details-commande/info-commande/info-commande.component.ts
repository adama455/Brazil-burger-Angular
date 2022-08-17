import { Component, Input, OnInit } from '@angular/core';
import { EtatCommande, GetCommande, UpdateCommande } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-info-commande',
  templateUrl: './info-commande.component.html',
  styleUrls: ['./info-commande.component.css']
})
export class InfoCommandeComponent implements OnInit {
  @Input()
  commande!:GetCommande;
  commandeUp!:UpdateCommande;
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
  }

  annulerCommande(commande:GetCommande){
    this.commandeService.modifierCommande(commande.id,EtatCommande.annuler);
      console.log;

  }
  disableBtnAnnuler(commande:GetCommande){
    const etat:string[]=['enCoursDeLivraison','annuler','valider'];
    if (etat.includes(commande.etat)) {
      return true; 
    }
    // location.reload();
    return false;
  }
  // changeColor(newColor:any) {
  //   var elem = document.getElementById('annuler');
  // }

}
