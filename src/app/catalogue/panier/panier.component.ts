import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private panier:PanierService) { }
  
  // tableau================================
  items$=this.panier.items$

  ngOnInit(): void {
  }

}
