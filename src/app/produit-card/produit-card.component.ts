import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu, IBurger } from '../catalogue.model';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css']
})
export class ProduitCardComponent {

  // catalogue!:ICatalogue
  // @Input() detailBurger!:IBurger;
  // menus!:IMenu[];
  // burgers!:IBurger[];
  // @Input() details!:IMenu;
  // constructor(private produitService : CatalogueService, private route: Router) {
  
  // }

  // ngOnInit(): void {
  //   // this.showProduits();
  //   this.showMenu();
  //   this.showBurger();
  // }

  // // showProduits() {
  // //   // this.produitService.getProduits;
  // //   this.catalogue = this.produitService.getCatalogues();
  // //   console.log(this.catalogue);
    
  // // } 
  // showMenu() {
  //   // this.produitService.getProduits;
  //   this.menus = this.produitService.getMenus();
  //   console.log(this.menus);
    
  // } 
  // showBurger() {
  //   // this.produitService.getProduits;
  //   this.burgers = this.produitService.getBurgers();
  //   console.log(this.burgers);
    
  // } 

  // detail(){
  //   this.route.navigateByUrl(`menu/${this.details.id}`);
  // }

  // showDetailB(){
  //   this.router.navigateByUrl(`produit/:${this.detailBurger.id}`);
  // }
}


// function input() {
//   throw new Error('Function not implemented.');
// }

