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
import { CommandeLigneComponent } from './catalogue/panier/commande-ligne/commande-ligne.component';
import { FormsModule } from '@angular/forms';
import { ComplementsComponent } from './catalogue/show-details/complements/complements.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { ConnexionComponent } from './forms/connexion/connexion.component';
import { FritesMenuComponent } from './catalogue/show-details/frites-menu/frites-menu.component';
import { BurgersDetailMenuComponent } from './catalogue/show-details/burgers-detail-menu/burgers-detail-menu.component';
import { BoissonsDetailMenuComponent } from './catalogue/show-details/boissons-detail-menu/boissons-detail-menu.component';
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
    CommandeLigneComponent,
    BurgersDetailMenuComponent,
    ComplementsComponent,
    InscriptionComponent,
    ConnexionComponent,
    FritesMenuComponent,
    BoissonsDetailMenuComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
