import { Component, Input, OnInit } from '@angular/core';
import {  ITaille, ITailleBoisson, Taille } from 'src/app/catalogue.model';
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


  increment(){
    return this.qteBoisson ++
    console.log(this.qteBoisson );
    
  }
  decrement(){
    return this.qteBoisson --
    console.log(this.qteBoisson );
    
  }

// Incrementation et Décrementation de la quantité de boisson dans détail Menu==================
  incremente(){
    return this.data.increment();
    
  }
  decremente(){
    return this.data.decrement(); 
  }
}
