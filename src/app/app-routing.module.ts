import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PanierComponent } from './catalogue/panier/panier.component';
import { ShowDetailsComponent } from './catalogue/show-details/show-details.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
// import { CatalogueComponent } from './catalogue/catalogue.component';
// import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path:'menu/:id', component: DetailMenuComponent},
  { path:'menu', component: MenuComponent},
  { path:'produit/:id', component: ShowDetailsComponent},
  { path:'burger/:id', component: DetailBurgerComponent},
  { path:'burger', component: BurgerComponent},
  { path:'panier', component: PanierComponent},
  { path:'', component: HeaderComponent},
  { path:'catalogue', component: CatalogueComponent},
  // { path:'', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
