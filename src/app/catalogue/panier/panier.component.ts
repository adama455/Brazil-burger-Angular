import { Component, OnInit, Output } from '@angular/core';
import { IQuartier, IZone } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  quartiers:IQuartier[]=[];
  zone!:IZone;

  constructor(private panier:PanierService, private data:DataServiceService ) { }
  
  // tableau================================
    items$=this.panier.items$;

  /* 
    *@ prix total Commande =========
  */
    getTotal(){
      return  this.panier.getPrixTotal();
    }
  
    ngOnInit(): void {
      this.data.getZonesObs().subscribe(
        (data)=>{

          console.log(data);
          this.quartiers=data.quartiers;

        }
      );
    }
    // 
    


    
  }
