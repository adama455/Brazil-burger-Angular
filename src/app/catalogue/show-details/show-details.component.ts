import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBurger, IMenu } from 'src/app/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  @Input() detail!:any;
  @Input() maCouleur:string="red";
  
  constructor(private data:DataServiceService, private route: ActivatedRoute) { }
  
  id:number = +this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.data.getSingleProduitObs(this.id).subscribe(
      data=> {
        this.detail = data;
        console.log(this.detail);
        
      }
      
    )
  }

  // showTitle(){
  //   if (this.detail.type == "menu") {
  //     "DETAIL MENU";
      
  //   }else if (this.detail.type =="burger" ){
  //     "DETAIL BURGER"; 
  //   }
    
  // }




}
