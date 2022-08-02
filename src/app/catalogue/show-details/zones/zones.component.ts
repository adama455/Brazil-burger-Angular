import { Component, Input, OnInit } from '@angular/core';
import { IQuartier, IZone } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  zones:IZone[]=[];
  quartiers:IQuartier[]=[];
  @Input() zone!:IZone;
  @Input() quartier!:IQuartier;

  constructor(private data:DataServiceService) { }

  ngOnInit(): void {
  }

  // showZone(livraison:HTMLInputElement){
  //     if (livraison.checked) {
  //       return 'block'  
  //     }else{
  //       return 'none';  
  //     }
  // }
}
