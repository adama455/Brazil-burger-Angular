import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(private panier:PanierService ) { }
  
  // tableau================================
  items$=this.panier.items$;
  // Somme total==========================
  total:number=this.panier.getPrixTotal();
  
  // // quantité===========
  // qte:number=1;
  // plus(){
  //   this.qte=this.qte++;
  // }
  // moins(e:Event){
  //   if (this.qte<=1) {
  //     this.qte=this.qte--; 
  //   }
  // }
  
  // removeToPanier(prod:any){
  //   this.panier.putToPanier(prod,"out")
  // }




  ngOnInit(): void {

  }
  
}
