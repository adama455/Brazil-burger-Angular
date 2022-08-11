import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from '../admin/commandes/commandes.component';
import { DetailCommandeComponent } from '../admin/commandes/detail-commande/detail-commande.component';
import { ListeZonesComponent } from './commandes/liste-zones/liste-zones.component';
import { OnZoneComponent } from './commandes/on-zone/on-zone.component';
// import { DetailsComponent } from '../commandes/details/details.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { NewLivraisonComponent } from './livraisons/new-livraison/new-livraison.component';
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
        component: LivraisonsComponent  
      },
      { 
        path: "new", 
        component: NewLivraisonComponent  
      },
      { 
        path: ":id",
        component: LivraisonsComponent
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
        path: ":new", 
        component:  ProduitsComponent  
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
