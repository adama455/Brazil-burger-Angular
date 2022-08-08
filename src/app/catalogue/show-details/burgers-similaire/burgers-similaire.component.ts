import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-burgers-similaire',
  templateUrl: './burgers-similaire.component.html',
  styleUrls: ['./burgers-similaire.component.css']
})
export class BurgersSimilaireComponent implements OnInit {
  @Input() burgerS!:IBurger;

  constructor(private data:DataServiceService) { }

  ngOnInit(): void {
  }

  convert(url: string){
    return this.data.convertImg(url)
  }

}
