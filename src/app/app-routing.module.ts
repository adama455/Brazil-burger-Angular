import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PanierComponent } from './catalogue/panier/panier.component';
import { ShowDetailsComponent } from './catalogue/show-details/show-details.component';
import { ClientComponent } from './client/client.component';
import { DetailsCommandeComponent } from './client/details-commande/details-commande.component';
import { CommandesComponent } from './commandes/commandes.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { ConnexionComponent } from './forms/connexion/connexion.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
// import { SubDetailMenuComponent } from './catalogue/show-details/sub-detail-menu/sub-detail-menu.component';
// import { CatalogueComponent } from './catalogue/catalogue.component';
// import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path:'menu/:id', component: DetailMenuComponent},
  { path:'menu', component: MenuComponent},
  { path:'produit/:id', component: ShowDetailsComponent},
  { path:'burger/:id', component: DetailBurgerComponent},
  { path:'burger', component: BurgerComponent},
  { path:'paniers', component: PanierComponent},
  { path:'', component: HeaderComponent},
  { path:'catalogue', component: CatalogueComponent},
  { path:'registration', component: InscriptionComponent},
  { path:'connexion', component: ConnexionComponent},
  { path:'list-clients', component: ClientComponent},
  { path:'commandes/:id', component: DetailsCommandeComponent},
  { path:'list-commandes', component: CommandesComponent},
  // { path:'sub', component: SubDetailMenuComponent},
  // { path:'', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
