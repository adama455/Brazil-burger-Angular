import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITaille, ITailleBoisson, Taille } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-boissons-detail-menu',
  templateUrl: './boissons-detail-menu.component.html',
  styleUrls: ['./boissons-detail-menu.component.css']
})
export class BoissonsDetailMenuComponent implements OnInit {

  @Input()  taille!:ITailleBoisson;
  @Input()  tailleBoisson!:ITailleBoisson;
    
  constructor(
    private dataService:DataServiceService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


  //function vertir image----------------
  convert(url: string){
    return this.dataService.convertImg(url)
  }

}
