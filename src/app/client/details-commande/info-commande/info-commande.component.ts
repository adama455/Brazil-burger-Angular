import { Component, Input, OnInit } from '@angular/core';
import { GetCommande } from 'src/app/models/commande';

@Component({
  selector: 'app-info-commande',
  templateUrl: './info-commande.component.html',
  styleUrls: ['./info-commande.component.css']
})
export class InfoCommandeComponent implements OnInit {
  @Input()
  commande!:GetCommande;
  constructor() { }

  ngOnInit(): void {
  }

}
