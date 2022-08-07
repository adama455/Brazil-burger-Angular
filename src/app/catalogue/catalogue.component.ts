import { Component, Input, OnInit } from '@angular/core';
import { ICatalogue, IMenu, IBurger } from '../models/catalogue.model';
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
  searchText:any;
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
