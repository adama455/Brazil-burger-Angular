import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/commande';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {

  @Input()
  prod!: { quantiteCmde: number; produit: Produit; };
  constructor(private data:DataServiceService) { }

  ngOnInit(): void {
    
  }

  convert(url: string){
    return this.data.convertImg(url)
  }
}
