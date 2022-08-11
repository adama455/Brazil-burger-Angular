import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { ILivraison } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  livraisons:ILivraison[]=[];
  constructor( private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getLivraisonsObs().pipe(
      take(1),
      map((data)=>{
        console.log(data);
      
      })
    ).subscribe()
  }

}
