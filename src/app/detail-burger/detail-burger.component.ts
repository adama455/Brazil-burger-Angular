import { Component, Input, OnInit } from '@angular/core';
import { IBurger, IMenu } from '../catalogue.model';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {
@Input() produit!:IBurger|IMenu

  constructor() { }

  ngOnInit(): void {
  }

}
