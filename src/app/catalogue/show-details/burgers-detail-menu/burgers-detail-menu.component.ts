import { Component, Input, OnInit } from '@angular/core';
import { Burger,  IBurger} from 'src/app/models/catalogue.model';
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

    constructor(
      private data:DataServiceService, 
    ) { }
  ngOnInit(): void {  
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

  
}
