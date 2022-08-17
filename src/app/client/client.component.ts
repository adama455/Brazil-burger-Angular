import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { GetCommande } from '../models/commande';
import { IClient } from '../models/user';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:IClient[]=[];




  constructor( private dataService: DataServiceService,private router: Router) { }

  ngOnInit(): void {

    this.dataService.getClientsObs().pipe(
      take(1),
      map((data:any) =>{
        data.filter((y:IClient)=>{
          if (y.commandes.length > 0) {
            this.clients.push(y);
            console.log(this.clients);
            
          }
        })
      })
    ).subscribe()
  }
  // fonction pour aller dans detail commande
  detailCommande(client:IClient){
    this.router.navigateByUrl("commandes/"+client.id);
  }


}
