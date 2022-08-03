import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { Burger, Frite, IBoisson, IBurger, ICatalogue, IComplement, IFrite, IMenu, ITaille, ITailleBoisson, Taille } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  // burger!:Burger
  fritess!:IFrite[];
  boissons!:IBoisson[];
  complement!:IComplement;
  @Input() produit!:IBurger|IMenu;
  @Input() maCouleur:string="red";
  
  // /////////// ça concerne les sous détail de Menu////////////////
  ////////////////////////////////////////////////////////////////
  menu!: IMenu;
  menus!:IMenu[];
  burgers:Burger[]=[];
  frites:Frite[]=[];
  tailles!:ITaille[];
  frit:Frite[]=[];
  frite!:Frite;
  // burgers!:Burger[]; 
  @Input() burger!:Burger; ///tableau de burger ki est ds menu
  // frites!:IFrite[];
  // boissons!:IBoisson[];
  // boisson!:IBoisson;
  tailleBoissons!:ITailleBoisson[]
  taille!:Taille;
  taillee!:Taille[];
  
  allBurgers!:IBurger[];
  allFrites!:IFrite[];
  allBoissons!:IBoisson[];
  boisson!:IBoisson;
  parametre!:number;
  param!:string;
////////////////////////////////////////////////////////////////
  
  constructor(
    private data:DataServiceService, 
    private route: ActivatedRoute,
  ){

  }

  id:number = +this.route.snapshot.params['id'];

  ngOnInit(): void {

    this.data.getComplementsObs().subscribe(
      (data:IComplement)=>{
        this.fritess=data.frites;
        this.boissons=data.boissons;
        console.log(data);    
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
          console.log(cata);
        });

        cata.menus.forEach((product:IMenu) =>{
          if (this.id == product.id) {
            this.produit = product;
            this.frites=product.frites; //les frites du munu
            this.tailles=product.tailles; //les tailles de boisson du menu
            // this.burgers=product.burgers;
            // console.log(this.produit);
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
            console.log(oburger);
            if (oneBurger.id===oburger.burger.id) {
              oburger.burger.image=oneBurger.image;
            }
          })
        })
      })
  }
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
  convert(url: string){
    return this.data.convertImg(url)
  }
  showTitle(product:any){
    return product.burgers? "Menus":"Burger"
  }

  isMenu(product: any) {
    return product.burgers ? true : false;

  }
}
