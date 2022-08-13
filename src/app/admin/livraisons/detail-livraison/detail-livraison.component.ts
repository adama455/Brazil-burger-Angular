import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCommande, ILivraison } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-detail-livraison',
  templateUrl: './detail-livraison.component.html',
  styleUrls: ['./detail-livraison.component.css']
})
export class DetailLivraisonComponent implements OnInit {
  id:number=this.route.snapshot.params['id'];
  oneLiv!:ILivraison;
  commandeLiv!:GetCommande

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

}
