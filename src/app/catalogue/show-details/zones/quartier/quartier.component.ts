import { Component, Input, OnInit } from '@angular/core';
import { IQuartier, IZone } from 'src/app/catalogue.model';

@Component({
  selector: 'app-quartier',
  templateUrl: './quartier.component.html',
  styleUrls: ['./quartier.component.css']
})
export class QuartierComponent implements OnInit {
  @Input() quartier!:IQuartier;
  zone!:IZone;
  // quartiers:IQuartier[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
