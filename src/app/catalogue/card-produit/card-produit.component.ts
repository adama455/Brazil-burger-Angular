import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBurger, IMenu } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';
// import { DataServiceService } from 'src/app/services/data-service.service';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.css']
})
export class CardProduitComponent implements OnInit {

  @Input() produit!:IMenu|IBurger;
  disabled!:boolean;
  // @Input() cpt:number = 0
  constructor(private route:Router, private data:DataServiceService, private panier:PanierService) { 
    
  }
  // tableau==================
  items$?:Observable<any> = this.panier.items$;
  
  
  ngOnInit(): void {
    // this.addCart();
    this.disabled=true;
  }
  
  // routing: fonction pour naviger vers detail
  showDetails(){
    // alert("ok");
    this.route.navigateByUrl(`produit/${this.produit.id}`)
  }

  convert(url: string){
    return this.data.convertImg(url)
  }
  // bloquer l-incrementation du panier au niveau du produit=====================
  addBurgerToCart(prod:any){
    this.panier.putToPanier(prod) ;
    this.disabled=false;

    // prix total commande=============
    this.panier.getPrixTotal();
  }

  showCart(product:any){
    return product.burgers? this.disabled=false : this.disabled;
  }

}
