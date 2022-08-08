import { Component, Input, OnInit } from '@angular/core';
import { Burger, IBurger, IMenu } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-menus-similaire',
  templateUrl: './menus-similaire.component.html',
  styleUrls: ['./menus-similaire.component.css']
})
export class MenusSimilaireComponent implements OnInit {

  @Input() menusS!:IMenu;

  constructor(private data:DataServiceService) { }

  ngOnInit(): void {

  }
  convert(url: string){
    return this.data.convertImg(url)
  }

}
