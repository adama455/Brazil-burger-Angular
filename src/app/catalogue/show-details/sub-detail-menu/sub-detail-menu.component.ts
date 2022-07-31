import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBoisson, IBurger, ICatalogue, IFrite, IMenu } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-sub-detail-menu',
  templateUrl: './sub-detail-menu.component.html',
  styleUrls: ['./sub-detail-menu.component.css']
})
export class SubDetailMenuComponent implements OnInit {
    // @Input() produit!:IMenu;
    menu!: IMenu
    menus!:IMenu[];
    allBurgers!:IBurger[];
    Burgers!:IBurger[];
    burger!:IBurger;
    frites!:IFrite[];
    boissons!:IBoisson[];
    boisson!:IBoisson;

    constructor(
      private dataService:DataServiceService, 
      private route: ActivatedRoute
    ) { }
  id:number = +this.route.snapshot.params['id'];
  ngOnInit(): void { 
    // this.dataService.getProduitsObs().subscribe(
    //   data=>{
    //     this.menus = data.menus;
    //     this.menu = this.dataService.getSingleProduitObs(this.id);
    //     this.allBurgers=data.burgers;
    //     this.Burgers=this.menu.burgers;
    //     this.allBurgers.forEach(oneBurger=>{
    //       this.Burgers.forEach(oburger=>{
    //         if (oneBurger.id===oburger.burger.id) {
            
    //         }
    //       })
    //     })
    //   }
    // )
      
  }

  //function vertir image----------------
  convert(url: string){
    return this.dataService.convertImg(url)
  }
  
}
