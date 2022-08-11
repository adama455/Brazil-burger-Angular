import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { IZone } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-liste-zones',
  templateUrl: './liste-zones.component.html',
  styleUrls: ['./liste-zones.component.css']
})
export class ListeZonesComponent implements OnInit {
  zones:IZone[]=[];
  constructor(private router: Router,private dataService:DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getZonesObs().pipe(
      take(1),
      map((data:any) =>{
        data.filter((z:IZone)=>{
          if (z.commandes.length > 0) {
            this.zones.push(z);
          }
        })
      })
    ).subscribe()
  }
  // fonction pour aller dans detail commande
  detailCommande(zone:IZone){
    this.router.navigateByUrl("admin/commandes/zone/" + zone.id);
  }

}
