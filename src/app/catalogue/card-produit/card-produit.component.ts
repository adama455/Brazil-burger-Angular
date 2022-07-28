import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBurger, IMenu } from 'src/app/catalogue.model';
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
  constructor(private route:Router, private sanitizer: DomSanitizer, private panier:PanierService) { 
    
  }
  // tableau==================
  items$?:Observable<any> = this.panier.items$;
  
  ngOnInit(): void {
    // this.addCart();
    this.disabled=true;
  }
  showDetails(){
    // alert("ok");
    this.route.navigateByUrl(`produit/${this.produit.id}`)
  }

  transform (imgPro: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64"+imgPro); 
  }
  addCart(prod:any){
    this.panier.addToPanier(prod) ;
    // this.disabled=false;
  }
}
