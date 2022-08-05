import { Component, Input, OnInit } from '@angular/core';
import {  IBoisson, ITaille, ITailleBoisson, Taille } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-choix-taille-boisson',
  templateUrl: './choix-taille-boisson.component.html',
  styleUrls: ['./choix-taille-boisson.component.css']
})
export class ChoixTailleBoissonComponent implements OnInit {
  @Input() taillee!:ITaille;
  @Input() taille!:Taille;
  tailleBoisson!:ITailleBoisson;
  @Input() qteBoisson:number=0;

  // @Input() produit!:IBoisson|IFrite;

  constructor(private data:DataServiceService) { }

  ngOnInit(): void {

  }

  convert(url: string){
    return this.data.convertImg(url)
  }

  updateQteBoisson(qte:number){
    return this.data.updateQte(qte);
  }

// Incrementation et Décrementation de la quantité de boisson dans détail Menu==================
  updateQte(n:number){
    if ((this.qteBoisson == 0 && n < 0) || 
      (this.data.tabQteBoisson[this.tailleBoisson.boisson.id].somQte ==
      this.data.tabQteBoisson[this.tailleBoisson.boisson.id].qteTotal && n > 0)){ 
      return
    }
    this.qteBoisson += n;
    // console.log(this.qteBoisson);
    
    this.data.tabQteBoisson[this.tailleBoisson.boisson.id].qteTotal +=n;
    console.log(
      this.data.tabQteBoisson[this.tailleBoisson.boisson.id].qteTotal, 
      this.data.tabQteBoisson[this.tailleBoisson.boisson.id].somQte
    );
    

    
  }
  
}
