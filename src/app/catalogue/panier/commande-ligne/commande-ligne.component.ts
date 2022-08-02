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

  constructor(private panier:PanierService) { }
  
  items$ = this.panier.items$;
  prixTotal=this.getPrixTotal();

  ngOnInit(): void {
   
  }
// Augmenter ou diminuer prix ligne de commande 
  totalLine(product:IBurger  | IMenu,qte:any){
    return this.panier.cmdeLinePrice(product,qte);
  }

  getPrixTotal(){
    return this.panier.getPrixTotal();
  }
  removeToPanier(prod:any){
    this.panier.putToPanier(prod,"out")
  }


}
