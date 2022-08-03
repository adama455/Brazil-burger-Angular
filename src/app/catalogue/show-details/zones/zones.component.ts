import { Component, Input, OnInit } from '@angular/core';
import { IQuartier, IZone } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  // zones:IZone[]=[];
  quartiers:IQuartier[]=[];
  zones:IZone[]=[];
  allQuartiers:IQuartier[]=[];
  @Input() zone!:IZone;
  @Input() quartier!:IQuartier;

  constructor(private data:DataServiceService) { }

  ngOnInit(): void {
    // this.data.getZonesObs().subscribe(
    //   (data)=>{
    //     this.zones=data;
    //     console.log(this.zones);
    //     this.data.getQuartiersObs().subscribe(
    //       (qata)=>{
    //         this.allQuartiers=qata;
            
    //           this.allQuartiers.forEach((allQ)=>{
    //             this.zones.forEach((z)=> {
    //               z.quartiers.forEach((oneQ)=>{
    //                 if (allQ.id === oneQ.id) {
    //                   allQ.nom =oneQ.nom;
    //                   console.log;
                      
    //                 }
    //               })
    //             })
    //           })
            
          
    //     });
    //   }
    // );
  }

  // showZone(livraison:HTMLInputElement){
  //     if (livraison.checked) {
  //       return 'block'  
  //     }else{
  //       return 'none';  
  //     }
  // }
}
