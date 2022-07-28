import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from '../catalogue.model';
// import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus!:IMenu[];
  @Input() details!:IMenu;


  constructor(private route: Router) {
  
  }

  ngOnInit(): void {
    
  }
  // showMenu() {
  //   // this.produitService.getProduits;
  //   this.menus = this.produitService.getMenus();
  //   return this.menus;
    
  // } 

  // detailM(){
  //   this.route.navigateByUrl(`menu/${this.details.id}`);
  // }

}
