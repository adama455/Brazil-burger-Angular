import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IZone } from 'src/app/models/catalogue.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-on-zone',
  templateUrl: './on-zone.component.html',
  styleUrls: ['./on-zone.component.css']
})
export class OnZoneComponent implements OnInit {
  zone!: IZone;
  id:number = +this.route.snapshot.params['id'];
  constructor(private data: DataServiceService,private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    this.data.getOneZoneObs(this.id).subscribe((data) => {
      this.zone = data;
      console.log(data);
    })
  }
  convert(url: string){
    return this.data.convertImg(url)
  }

}
