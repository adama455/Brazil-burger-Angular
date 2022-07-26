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
import {HttpClientModule, HttpClient} from '@angular/common/http';
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
import { ZonesComponent } from './catalogue/show-details/zones/zones.component';
import { QuartierComponent } from './catalogue/show-details/zones/quartier/quartier.component';
import { ChoixTailleBoissonComponent } from './catalogue/show-details/choix-taille-boisson/choix-taille-boisson.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ClientComponent } from './client/client.component';
import { DetailsCommandeComponent } from './client/details-commande/details-commande.component';
import { InfoCommandeComponent } from './client/details-commande/info-commande/info-commande.component';
import { InfoProduitComponent } from './client/details-commande/info-produit/info-produit.component';
import { MenusSimilaireComponent } from './catalogue/show-details/menus-similaire/menus-similaire.component';
import { BurgersSimilaireComponent } from './catalogue/show-details/burgers-similaire/burgers-similaire.component';
import { CommandesComponent } from './commandes/commandes.component';
import { DetailsComponent } from './commandes/details/details.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AdminModule } from './admin/admin.module';
// import { ProduitSimilaireComponent } from './catalogue/show-details/menus-similaire/menus-similaire.component';
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
    ZonesComponent,
    QuartierComponent,
    ChoixTailleBoissonComponent,
    ClientComponent,
    DetailsCommandeComponent,
    InfoCommandeComponent,
    InfoProduitComponent,
    MenusSimilaireComponent,
    BurgersSimilaireComponent,
    CommandesComponent,
    DetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
