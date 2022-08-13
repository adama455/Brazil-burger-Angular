import { Component, Input, OnInit } from '@angular/core';
import { IZone } from 'src/app/models/catalogue.model';
import { GetCommande } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-commandes-a-livrer',
  templateUrl: './commandes-a-livrer.component.html',
  styleUrls: ['./commandes-a-livrer.component.css']
})
export class CommandesALivrerComponent implements OnInit {
  zone!:IZone;
  @Input() commande!:GetCommande

  constructor( private commandeService:CommandeService ) { }

  ngOnInit(): void {
  }

  // Ajouter et retirer Commandes à livrer===============================
  ajoutEtRetraitLivraison(commande:GetCommande,input:HTMLInputElement){
    if (input.checked) {
      this.commandeService.ajouterDansLivraison(commande)
      
    }else{
      this.commandeService.retirerDansLivraison(commande)
    
    }
    // console.log(this.commandeService.commandeALivre);  
  }

}
