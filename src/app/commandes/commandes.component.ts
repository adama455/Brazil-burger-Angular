import { Component, OnInit } from '@angular/core';
import { GetCommande } from '../models/commande';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes:GetCommande[]=[];
  searchDate:any

  constructor(private dataService: DataServiceService,) { }

  ngOnInit(): void {
    this.dataService.getCommandeObs().subscribe(data => {
      console.log(data);
      this.commandes=data;  
    })
    
  }

}
