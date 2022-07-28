import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from '../services/panier/panier.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  // @Output() cpt:number=0;
  
  constructor(private panier:PanierService) { 
     
  }

  items$?:Observable<any> = this.panier.items$;
  
  ngOnInit(): void {
  }
 
}
