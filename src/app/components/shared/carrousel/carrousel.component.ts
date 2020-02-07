import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  images:any [] = ['./../../../../assets/img/coworking/attico2.jpg', './../../../../assets/img/coworking/aticco_bcn.jpg',
  './../../../../assets/img/coworking/quartdenou.jpg', './../../../../assets/img/coworking/the_house.jpg']

  constructor() {
  }

  ngOnInit() {
  }

}
