import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { DetailCommandeComponent } from './commandes/detail-commande/detail-commande.component';
import { OnZoneComponent } from './commandes/on-zone/on-zone.component';
import { ListeZonesComponent } from './commandes/liste-zones/liste-zones.component';
import { NewLivraisonComponent } from './livraisons/new-livraison/new-livraison.component';
import { CommandesALivrerComponent } from './livraisons/commandes-a-livrer/commandes-a-livrer.component';
import { FilterZonePipe } from './pipes/filter-zone.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
    DetailCommandeComponent,
    OnZoneComponent,
    ListeZonesComponent,
    NewLivraisonComponent,
    CommandesALivrerComponent,
    FilterZonePipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class AdminModule { }
