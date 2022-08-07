import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBurger } from '../models/catalogue.model';
// import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  burgers!:IBurger[];
  @Input() details!:IBurger;


  constructor( private route: Router) {
  
  }

  ngOnInit(): void {
    // const snapId = +this.rout.snapshot.params['id'];

  }

  // showBurger() {
  //   // this.produitService.getProduits;
  //   this.burgers = this.produitService.getBurgers();
  //   return this.burgers;
    
  // } 

  // detailB(){
  //   this.route.navigateByUrl(`burger/${this.details.id}`);
  // }
}
