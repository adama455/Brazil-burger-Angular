import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCommande } from 'src/app/models/commande';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  commande!:GetCommande
  id:number = +this.route.snapshot.params['id'];

  constructor(
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private data:DataServiceService,
    ) { }

  ngOnInit(): void {
    this.commandeService.getOneCommande(this.id).subscribe((data)=>{
      console.log(data);
      this.commande = data;
    })
  }
  convert(url: string){
    return this.data.convertImg(url)
  }
}
