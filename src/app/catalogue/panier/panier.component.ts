import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import {
  Frite,
  IBoisson,
  IComplement,
  IFrite,
  IQuartier,
  ITaille,
  ITailleBoisson,
  IZone,
} from 'src/app/catalogue.model';
import {
  Commande,
  FormatCmde,
  IProduit,
  Produit,
} from 'src/app/models/commande';
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
  disabled: string = 'true';

  fritess!: IFrite[];
  boissons!: IBoisson[];
  complement!: IComplement;
  postId!: number;

  constructor(
    private panier: PanierService,
    private data: DataServiceService,
    private http: HttpClient
  ) {}

  // tableau================================
  items$ = this.panier.items$;

  /*
   *@ prix total Commande =========
   */
  getTotal() {
    return this.panier.getPrixTotal();
  }

  // postCommande(){
  //   return this.panier.postCommande();
  // }

  ngOnInit(): void {
    this.data.getComplementsObs().subscribe((data: IComplement) => {
      this.fritess = data.frites;
      this.boissons = data.boissons;
      console.log(data);
    });

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

  existModeLivraision(emporte: any, zoneSelect: any) {
    if (this.estAEmporter(emporte)) {
      return true;
    } else if (this.selectZone(zoneSelect)) {
      return true;
    }
    return false;
  }

  peutCommander(empor: any, zonee: any): boolean {
    if (
      (this.estAEmporter(empor) || this.estALivrer(zonee)) &&
      this.getTotal() > 0
    ) {
      console.log('il peut commander');
      return false;
    } else {
      console.log('il ne peut pas commander');
      return true;
    }
  }
  
  // Debut Validation Commande client:::::::::::::::::::::::::::
    postCommande() {
      let body:Commande={
        produits:this.operationCmd(),
        zone:"/api/zones/7",
      }
      this.panier.postCommande(body);
    }

    operationCmd() {
      //recuperer tous les produits du panier dans un tableau
      //  tabPaniers et les mettre produits
      let tabPaniers = this.panier.getPanier();
      const produits: FormatCmde[] = [];
      tabPaniers.forEach((produit: Produit) => {
        // console.log(produit);
        produits.push({
          quantiteCmde: +produit.quantity,
          produit: '/api/produits/' + produit.id,
          client:'api/clients/1'
        });
      });
      // console.log(produits);
      return produits;
    }
  // Debut Validation Commande client:::::::::::::::::::::::::::
}
