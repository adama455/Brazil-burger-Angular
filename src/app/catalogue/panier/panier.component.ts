import { Component, OnInit, Output } from '@angular/core';
import { IQuartier, IZone } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  zones!: IZone[];
  quartiers: IQuartier[] = [];
  allQuartiers: IQuartier[] = [];
  zone!: IZone;
  quartier!: IQuartier;
  disabled: string = "true";

  constructor(
    private panier: PanierService,
    private data: DataServiceService
  ) {}

  // tableau================================
  items$ = this.panier.items$;

  /*
   *@ prix total Commande =========
   */
  getTotal() {
    return this.panier.getPrixTotal();
  }

  ngOnInit(): void {
    // this.data.getZonesObs().subscribe(
    //   (data)=>{
    //     this.zones=data;
    //     console.log(this.zones);
    //     this.zones.forEach((ozone)=>{
    //       console.log(ozone.nom);
    //       // ozone.quartiers.forEach((quartier)=>{
    //       //   console.log(quartier.nom);
    //       // })

    //     })
    //   }
    // );
  // Deuxiéme Méthode pour recuperer les Zones et les Quartier avec deux url(url zones et urlquartier)======================
    this.data.getZonesObs().subscribe((data) => {
      this.zones = data;
      console.log(this.zones);
      this.data.getQuartiersObs().subscribe((qata) => {
        this.allQuartiers = qata;
        this.allQuartiers.forEach((allQ) => {
          this.zones.forEach((z) => {
            z.quartiers.forEach((oneQ) => {
              if (allQ.id === oneQ.id) {
                allQ.nom = oneQ.nom;
                console.log;
              }
            });
          });
        });
      });
    });
  }
  //

  selectZone(zonee: any): boolean {
    if (zonee.value) {
      return true;
    }
    // console.log(+zoneSelect.value);
    return false;
  }

  estAEmporter(emporte: HTMLInputElement) {
    if (emporte.checked) {
      return true;
    } else {
      return false;
    }
  }

  estALivrer(livrer: HTMLInputElement) {
    if (livrer.checked) {
      return true;
    } else {
      return false;
    }
  }

  checkLivraison(livrer: HTMLInputElement): string {
    if (this.estALivrer(livrer)) {
      return 'block';
    }
    return 'none';
  }

  existModeLivraision(
    emporte: any,
    zoneSelect: any
  ) {
    if (this.estAEmporter(emporte)) {
      return true;
    } else if (this.selectZone(zoneSelect)) {

      return true;
    }
    return false;
  }
 

// commander(emporter: HTMLInputElement,
//   zoneSelect: HTMLSelectElement){
//     if (condition) {
      
//     }
//   }

  peutCommander(
    empor: any,
    zonee: any
  ): boolean {
    if (((this.estAEmporter(empor))||(this.estALivrer(zonee))) && this.getTotal() > 0) {
      console.log("il peut commander");
      return false;
    }else{
      console.log("il ne peut pas commander");
      return true;

    }
  }
}
