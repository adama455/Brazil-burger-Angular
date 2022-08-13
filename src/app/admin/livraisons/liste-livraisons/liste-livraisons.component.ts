import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, map } from 'rxjs';
import { ILivraison } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-liste-livraisons',
  templateUrl: './liste-livraisons.component.html',
  styleUrls: ['./liste-livraisons.component.css']
})
export class ListeLivraisonsComponent implements OnInit {

  livraisons:ILivraison[]=[];
  searchLiv:any
  nbreDeCmde!:number
  constructor( private commandeService:CommandeService,private router:Router) { }

  ngOnInit(): void {
    this.commandeService.getLivraisonsObs().pipe(
      take(1),
      map((data:ILivraison[])=>{
        // console.log(data);
        this.livraisons=data;
        this.livraisons.forEach((oneLiv)=>{
         this.nbreDeCmde= oneLiv.commandes.length;
        })
      
      })
    ).subscribe()
  }

  detailLivraison(livraison:ILivraison){
    this.router.navigateByUrl("admin/livraisons/" +livraison.id)
  }

}
