import { Component, Input, OnInit } from '@angular/core';
import { Frite, IFrite } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-frites-menu',
  templateUrl: './frites-menu.component.html',
  styleUrls: ['./frites-menu.component.css']
})
export class FritesMenuComponent implements OnInit {
  // fritee!:Frite;
  allFrites!:IFrite[]
  frites!:Frite[];
  @Input() frite!:Frite;

  
  constructor( private data:DataServiceService ) { }

  ngOnInit(): void {
  }

  //function vertir image----------------
  convert(url: string){
    return this.data.convertImg(url)
  }
}
