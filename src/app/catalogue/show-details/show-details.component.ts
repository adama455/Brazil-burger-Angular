import { transition } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { Burger, Frite, IBoisson, IBurger, ICatalogue, IComplement, IFrite, IMenu, ITaille, ITailleBoisson, Taille } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  produits!:IBurger[] | IMenu[]
  fritess!:IFrite[];
  boissons!:IBoisson[];
  complement!:IComplement;
  @Input() produit!:IBurger|IMenu;
  
  // /////////// ça concerne les sous détail de Menu////////////////
  ////////////////////////////////////////////////////////////////
  menu!: IMenu;
  burgerr!:IBurger
  menus!:IMenu[];
  burgerrs!:IBurger[];
  burgers:Burger[]=[];
  frites:Frite[]=[];
  tailles!:ITaille[];
  frit:Frite[]=[];
  frite!:Frite;
  @Input() burger!:Burger; ///tableau de burger ki est ds menu

  taille!:Taille;
  taillee!:Taille[];
  tailless!:ITaille;
  
  allBurgers!:IBurger[];
  allFrites!:IFrite[];
  tailleBoissons!:ITailleBoisson[]
  allBoissons!:IBoisson[];
  boisson!:IBoisson;
  parametre!:number;
  param!:string;

  disabled!:boolean;

  quantiteBoissonChoisi: number=0;

  ///////////////////////////////////////////////////////////////////////
  
  constructor(
    private data:DataServiceService, 
    private route: ActivatedRoute,
    private panierService: PanierService,
    private menuService: MenuService
  ){

  }

  id:number = +this.route.snapshot.params['id'];

  ngOnInit(): void {

    this.data.getComplementsObs().subscribe(
      (data:IComplement)=>{
        this.fritess=data.frites;
        this.boissons=data.boissons;
        // console.log(data);    
      }

    );

    this.data.getProduitsObs().pipe(
      take(1),
      map((cata:ICatalogue) =>{
        cata.burgers.forEach((product:IBurger) =>{
          if (this.id == product.id) {
            this.produit = product;
            return;
          }
          // console.log(cata);
        });

        cata.menus.forEach((product:IMenu) =>{
          if (this.id == product.id) {
            this.produit = product;
            this.frites=product.frites; //les frites du munu
            this.tailles=product.tailles; //les tailles de boisson du menu
            this.menuService.recupBoisson(this.tailles)
            // this.burgers=product.burgers;
            // console.log(this.produit);
            this.tailles.forEach((taillesss)=>{
              this.tailless=taillesss;
              // this.data.qteTotal=taillesss.quantite; 
              // this.data.tabQteBoisson[taillesss]
            })
            return;
          }
        });

      })
      
    ).subscribe()
  
    // /////////// ça concerne les burgers sous détail de Menu////////////////
    ////////////////////////////////////////////////////////////////

    this.parametre =this.route.snapshot.params['id'];
    this.param=this.parametre.toString();
    this.data.getProduitsObs().subscribe(
      (data:any)=>{
        this.menus = data.menus;
        this.menu = this.data.getOnMenus(this.param, this.menus);
        this.allBurgers=data.burgers; //l'enssemble des burgers dans catalogue
        this.burgers=this.menu.burgers; //l'enssemble des burgers dans menu
        this.allBurgers.forEach(oneBurger=>{
          this.burgers.forEach(oburger=>{
            // console.log(oburger);
            if (oneBurger.id===oburger.burger.id) {
              oburger.burger.image=oneBurger.image;
            }
          })
        })
      })


      // Produit similaire=================================================
      // Menu similaire=================================================
        this.menu = this.data.getOnMenus(this.param, this.menus);
        this.data.getMenusObs().subscribe((data:any)=>{
          // this.burgerr=this.data.getOnBurgers(this.param, this.menus);
          if (data.id!==this.menu.id) {
            // console.log(data.id);
            this.menus.push(data); 
                                 
          }
        })
      // Burger similaire=================================================
        this.burgerr = this.data.getOnBurgers(this.param, this.allBurgers);
        this.data.getBurgersObs().subscribe((data:any)=>{
          // this.burgerr=this.data.getOnBurgers(this.param, this.menus);
          if (data.id !== this.param){
            this.allBurgers.push(data);                      
          }
        })
  }
  ////////////////////////////////////////////////////////////////

  // this.frites=this.menu.frites ; //Tous les Frites dans menu
        //   this.data.getFritesObs().subscribe(
        //   (data:any)=>{
        //     this.allFrites=data; //l'enssemble des frites dans complement
        //     this.allFrites.forEach(Firtt=>{
        //       this.frites.forEach(frite=>{
        //         if (Firtt.id==frite.frite.id) {
        //           console.log(frite.quantite);
        //           frite.frite.image=Firtt.image; 
        //         }
        //       })
        //     })
        // })

        // this.tailles=this.menu.tailles; //Tous les tailleBoisson dans menu
        // this.data.getBoissonObs().subscribe(
        //   (data:any)=>{
        //     console.log(data);
        //     this.allBoissons=data;
        //     this.allBoissons.forEach(oboisson=>{
        //       this.tailles.forEach(otaille=>{
        //         console.log(otaille);
        //         this.taille.tailleBoissons.forEach(boisson=>{
        //           console.log(boisson);
        //           if (oboisson.id===boisson.boisson.id) {
        //             oboisson.image=boisson.boisson.image;
        //           }
        //         })
                
                  
        //         });
        //       })
        //     })
            
            
          // })


  ////////////////////////////////////////////////////////////////

  //function vertir image------
  

  // if (condition) {
    
  // }
  
  // disabledAddPanierMenu(){
  //   if (condition) {
      
  //   }
  // }



  
  addMenuToCart(prod:any){
    this.panierService.putToPanier(prod) ;
    this.disabled=false;

    // prix total commande=============
    this.panierService.getPrixTotal();
  }

  convert(url: string){
    return this.data.convertImg(url)
  }
  // Fonction pour dinamiser le Titre du menu------------------
  showTitle(product:any){
    return product.burgers? "Menus":"Burger"
  }

  isMenu(product: any) {
    return product.burgers ? true : false;
  }

  activePanierMenu(){
    return this.menuService.activePanierMenu()
  }

  // Incrementation et Décrementation de la quantité de boisson dans détail Menu==================
  // update(qte:number){
  //   this.quantiteBoissonChoisi = this.data.updateQte(qte); 
  //   return this.quantiteBoissonChoisi;
  // } 
}
