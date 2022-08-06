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




  constructor( private dataService: DataServiceService,private router: Router,) { }

  ngOnInit(): void {

    this.dataService.getClientsObs().pipe(
      take(1),
      map((data:any) =>{
        data.filter((y:IClient)=>{
          if (y.a_deja_commander==true) {
            this.clients.push(y);
          }
        })

      })

    ).subscribe()
  }
  detailCommande(client:IClient){
    this.router.navigateByUrl("commandes/"+client.id);
  }


}
