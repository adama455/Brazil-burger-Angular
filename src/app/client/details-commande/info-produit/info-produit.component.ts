import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/commande';

@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {

  @Input()
  prod!: { quantiteCmde: number; produit: Produit; };
  constructor() { }

  ngOnInit(): void {
  }

}
