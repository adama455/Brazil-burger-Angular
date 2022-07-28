import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HeaderComponent } from './header/header.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { MenuComponent } from './menu/menu.component';
import { BurgerComponent } from './burger/burger.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { CardProduitComponent } from './catalogue/card-produit/card-produit.component';
import { ShowDetailsComponent } from './catalogue/show-details/show-details.component';
import { FriteComponent } from './frite/frite.component';
import { BoissonComponent } from './boisson/boisson.component';
import { MouvementDirective } from './directives/mouvement.directive';
import { PanierComponent } from './catalogue/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderMenuComponent,
    CatalogueComponent,
    HeaderComponent,
    DetailProduitComponent,
    MenuComponent,
    BurgerComponent,
    DetailBurgerComponent,
    DetailMenuComponent,
    FilterComponent,
    CardProduitComponent,
    ShowDetailsComponent,
    FriteComponent,
    BoissonComponent,
    MouvementDirective,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
