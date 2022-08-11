import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs';
import { IZone } from 'src/app/models/catalogue.model';
import { GetCommande } from 'src/app/models/commande';
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
  tousLesCommandes:GetCommande[]=[]
  id:number = +this.route.snapshot.params['id'];
  constructor(private dataService:DataServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    /* ***************************** par zone ************************/
    this.dataService.getZonesObs().pipe(
      take(1),
      map((data:any) =>{
        data.filter((z:IZone)=>{
          if (z.commandes.length > 0) {
            console.log(z.commandes);
            
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
          if (z.etat) {
            // console.log(z.commandes);
            
            this.tousLesCommandes.push(z);
            // this.zones.push(z);
            console.log(this.tousLesCommandes);
          }
          
        })
      })
    ).subscribe();






  }
  commandeTerminer(){
    
  }
  // fonction pour aller dans detail commande

  // detailCommande(zone:IZone){
  //   this.router.navigateByUrl("admin/commandes/zone/" + zone.id);
  // }

}
