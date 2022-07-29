import { Component, Input, OnInit } from '@angular/core';
import { IBurger, IMenu } from 'src/app/catalogue.model';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-commande-ligne',
  templateUrl: './commande-ligne.component.html',
  styleUrls: ['./commande-ligne.component.css']
})
export class CommandeLigneComponent implements OnInit {

  @Input() line!:IMenu | IBurger;
  // quantité===========
  qte:number=1;
  constructor(private panier:PanierService) { }

  ngOnInit(): void {
  }

  // plus(e:Event){
  //   this.qte=++this.qte;
  // }
  // moins(e:Event){
  //   if (this.qte<=1) {
  //     return ;
  //   }
  //   this.qte=--this.qte; 
  // }
  
  removeToPanier(prod:any){
    this.panier.putToPanier(prod,"out")
  }

}
