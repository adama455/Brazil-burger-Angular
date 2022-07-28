import { Component, Input, OnInit } from '@angular/core';
import { ICatalogue, IMenu, IBurger } from '../catalogue.model';
// import { CatalogueService } from '../services/catalogue.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  menus!:IMenu[];
  burgers!:IBurger[];
  errorMsg!:string;
  catalogues!:ICatalogue;

  constructor(private dataService: DataServiceService){

  }
  ngOnInit(): void {
    this.dataService.getProduitsObs().subscribe(
      (cata:ICatalogue)=>{
        console.log(cata);
        
        this.menus=cata.menus;
        this.burgers=cata.burgers;
      }
    
    );
      
     
  }
}
// export class CatalogueComponent implements OnInit{
//   // produit!:IProduit[];
//   catalogue!:ICatalogue
//   menus!:IMenu[];
//   burgers!:IBurger[];
//   constructor(private produitService : CatalogueService) {
  
//   }

//   ngOnInit(): void {
//     // this.showProduits();
//     this.showMenu();
//     this.showBurger();
//   }

//   // showProduits() {
//   //   // this.produitService.getProduits;
//   //   this.catalogue = this.produitService.getCatalogues();
//   //   console.log(this.catalogue);
    
//   // } 
//   showMenu() {
//     // this.produitService.getProduits;
//     this.menus = this.produitService.getMenus();
//     // console.log(this.menus);
    
//   } 
//   showBurger() {
//     // this.produitService.getProduits;
//     this.burgers = this.produitService.getBurgers();
//     // console.log(this.burgers);
    
//   } 
  
// }
