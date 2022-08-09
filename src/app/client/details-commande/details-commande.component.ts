import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCommande, } from 'src/app/models/commande';
import { IClient } from 'src/app/models/user';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {

  client!: IClient;
  commande!: GetCommande;
  id:number = +this.route.snapshot.params['id'];

    constructor(private dataService: DataServiceService,
      private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.dataService.getOneClient(this.id).subscribe((data) => {
      this.client = data;
  
    })

  } 

}

