import { Component, Input, OnInit } from '@angular/core';
import { IZone } from 'src/app/models/catalogue.model';
import { GetCommande } from 'src/app/models/commande';

@Component({
  selector: 'app-commandes-a-livrer',
  templateUrl: './commandes-a-livrer.component.html',
  styleUrls: ['./commandes-a-livrer.component.css']
})
export class CommandesALivrerComponent implements OnInit {
  zone!:IZone;
  @Input() commande!:GetCommande
  constructor() { }

  ngOnInit(): void {
  }

}
