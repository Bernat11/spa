import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 41.386848;
  lng = 2.169840;  

  constructor() { }

  ngOnInit() {
  }

}
