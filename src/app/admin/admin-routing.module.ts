import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from '../admin/commandes/commandes.component';
import { DetailCommandeComponent } from '../admin/commandes/detail-commande/detail-commande.component';
import { OnZoneComponent } from './commandes/on-zone/on-zone.component';
// import { DetailsComponent } from '../commandes/details/details.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';

export const routes: Routes = [ 
  { 
    path: "commandes",children:[
      { 
        path: "", 
        component: CommandesComponent 
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
        path: ":id",
        component: LivraisonsComponent
      },
      { 
        path: ":idLivreur", 
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
