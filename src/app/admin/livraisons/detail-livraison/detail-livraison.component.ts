import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtatCommande, GetCommande, ILivraison } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-detail-livraison',
  templateUrl: './detail-livraison.component.html',
  styleUrls: ['./detail-livraison.component.css']
})
export class DetailLivraisonComponent implements OnInit {
  id:number=this.route.snapshot.params['id'];
  oneLiv!:ILivraison;
  commandeLiv!:GetCommande;
  disabled:boolean=false;


  constructor(private commandeService: CommandeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.commandeService.getOneLivraison(this.id).subscribe((oneLiv)=>{
      this.oneLiv=oneLiv;
      this.oneLiv.commandes.forEach((cmd)=>{
        this.commandeLiv=cmd
      })
      console.log(this.oneLiv);
        
    })
  }

  validerLivraison(commande:GetCommande){
    this.commandeService.modifierCommande(commande.id,EtatCommande.livrer);

    location.reload();
  }
  annulerCmdLivraison(commande:GetCommande){
    this.commandeService.modifierCommande(commande.id,EtatCommande.annuler);
   
    // console.log(commande.id);
    
    // location.reload();
  }
  disabledBtn(commande:GetCommande){

    if (commande.etat==="annuler" ||commande.etat==="livrer") {
      return this.disabled = true;
    }else{
      return this.disabled ;
  
    }
  }

}
