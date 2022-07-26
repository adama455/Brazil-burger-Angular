import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from '../admin/commandes/commandes.component';
import { DetailCommandeComponent } from '../admin/commandes/detail-commande/detail-commande.component';
import { ListeZonesComponent } from './commandes/liste-zones/liste-zones.component';
import { OnZoneComponent } from './commandes/on-zone/on-zone.component';
import { DetailLivraisonComponent } from './livraisons/detail-livraison/detail-livraison.component';
import { ListeLivraisonsComponent } from './livraisons/liste-livraisons/liste-livraisons.component';
// import { DetailsComponent } from '../commandes/details/details.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { NewLivraisonComponent } from './livraisons/new-livraison/new-livraison.component';
import { NewProduitComponent } from './produits/new-produit/new-produit.component';
import { ProduitsComponent } from './produits/produits.component';

 const routes: Routes = [ 
  { 
    path: "commandes",children:[
      { 
        path: "", 
        component: CommandesComponent 
      },
      { 
        path: "zone", 
        component:  ListeZonesComponent
      },
      { 
        path: ":id", 
        component:  DetailCommandeComponent 
      },
      { 
        path: "zone/:id",
        component: OnZoneComponent
      },
    ] 
  },

  {
    path: "livraisons",children:[
      { 
        path: "", 
        component: ListeLivraisonsComponent  
      },
      { 
        path: "new", 
        component: NewLivraisonComponent  
      },
      { 
        path: ":id",
        component: DetailLivraisonComponent
      },
      { 
        path: "livreur/:id", 
        component: LivraisonsComponent 
      },
      
    ]
  },

  {
    path: "produits",children:[
      { 
        path: "", 
        component:  ProduitsComponent 
      },
      { 
        path: "new", 
        component:  NewProduitComponent 
      }
    ] 
  },
  { 
    path: "", 
    component: CommandesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
