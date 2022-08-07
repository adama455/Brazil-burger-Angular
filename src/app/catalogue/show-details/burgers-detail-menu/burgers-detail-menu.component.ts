import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Burger, Frite, IBoisson, IBurger, ICatalogue, IFrite, IMenu, ITaille, ITailleBoisson, Taille } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-burgers-detail-menu',
  templateUrl: './burgers-detail-menu.component.html',
  styleUrls: ['./burgers-detail-menu.component.css']
})
export class BurgersDetailMenuComponent implements OnInit {
    // @Input() produit!:IMenu;
    // menu!: IMenu
    // menus!:IMenu[];
    
    // burger!:Burger; ///tableau de burger ki est ds menu
    allBurgers!:IBurger[];
    burgers!:Burger[]; 
    @Input() burge!:Burger;
   
    // tailles!:ITaille[];
    // taille!:Taille;
    // tailleBoissons!:ITailleBoisson[]
    // boisson!:IBoisson;

  // id!:number;
  // param!:string;

  constructor(
    private data:DataServiceService, 
    private route: ActivatedRoute,
    private sanitizer:DomSanitizer
  ) { }
  ngOnInit(): void { 
  // this.id =this.route.snapshot.params['id'];
  // this.param=this.id.toString();
  // this.dataService.getProduitsObs().subscribe(
  // data=>{
  //   this.menus = data.menus    
  //   this.menu = this.dataService.getOnMenus(this.param, this.menus);
  //     this.allBurgers=data.burgers; //l'enssemble des burgers dans catalogue
  //     this.burgers=this.menu.burgers; //l'enssemble des burgers dans menu
  //     this.allBurgers.forEach(oneBurger=>{
  //       this.burgers.forEach(oburger=>{
  //         // console.log(oburger.burger);
  //         if (oneBurger.id===oburger.burger.id) {
  //           oburger.burger.image=oneBurger.image;
  //         }
  //       })
  //     })
    
    
    //     this.frites=this.menu.frites;
    //     this.dataService.getComplementsObs().subscribe(
    //       data=>{
    //         this.allFrites=data.frites; //l'enssemble des frites dans complement
    //         this.allFrites.forEach(Firtt=>{
    //           this.frites.forEach(frite=>{
    //             // console.log(frite.frite);
    //             if (Firtt.id===frite.frite.id) {
    //               frite.frite.image=Firtt.image;    
    //             }
    //           })
    //         })
    //       }
    //     )
    // }

  // this.tailles=this.menu.tailles;
  // this.dataService.getBoissonObs().subscribe(
  //   data=>{
  //     console.log(data);
      
  //     // this.allFrites=data.frites; //l'enssemble des frites dans complement
  //     // this.allFrites.forEach(Firtt=>{
  //     //   this.frites.forEach(frite=>{
  //     //     if (Firtt.id===frite.frite.id) {
  //     //       frite.frite.image=Firtt.image;    
  //     //     }
  //     //   })
  //     // })
  //   }
  // )


  // )
}
//function vertir image----------------
convert(url: string){
  return this.data.convertImg(url)
}
// convertImg(param: string){
//   return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64, "+param); 
// }
  
}
