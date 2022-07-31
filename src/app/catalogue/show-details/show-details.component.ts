import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { IBoisson, IBurger, ICatalogue, IComplement, IFrite, IMenu } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  frites!:IFrite[];
  boissons!:IBoisson[];
  complement!:IComplement;
  @Input() produit!:IBurger|IMenu;
  @Input() maCouleur:string="red";
  
  constructor(
    private data:DataServiceService, 
    private route: ActivatedRoute
  ){

  }

  //function vertir image------
  convert(url: string){
    return this.data.convertImg(url)
  }

  id:number = +this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.data.getComplementsObs().subscribe(
      (data:IComplement)=>{
        this.frites=data.frites;
        this.boissons=data.boissons;
        console.log(data);    
    });

    this.data.getProduitsObs().pipe(
      take(1),
      map((cata:ICatalogue) =>{
        cata.burgers.forEach((product:IBurger) =>{
          if (this.id == product.id) {
            this.produit = product;
            // console.log(this.produit);
            return;
          }
        });
        cata.menus.forEach((product:IMenu) =>{
          if (this.id == product.id) {
            this.produit = product;
            // console.log(this.produit);
            return;
          }
        });
      })
      
    ).subscribe()


  }

  

  showTitle(product:any){
    return product.burgers? "Menus":"Burger"
  }
}
