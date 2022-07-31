import { Component, Input, OnInit } from '@angular/core';
import { IBoisson, IBurger, IFrite } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})
export class ComplementsComponent implements OnInit {

  @Input() produit!:IBoisson|IFrite;

  constructor(private data:DataServiceService) { }

  ngOnInit(): void {
    
  }

  convert(url: string){
    return this.data.convertImg(url)
  }
}
