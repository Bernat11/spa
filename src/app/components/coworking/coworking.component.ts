import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoworkingsService, Coworking } from 'src/app/services/coworkings.service';

@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.component.html',
  styleUrls: ['./coworking.component.css']
})
export class CoworkingComponent implements OnInit {

  coworking: Coworking;
  images: String[];

  constructor( private activatedRoute: ActivatedRoute, private coworkingsService: CoworkingsService) {
    this.activatedRoute.params.subscribe( params => {
      console.log(coworkingsService.getCoworking(params.id))
      this.coworking = this.coworkingsService.getCoworking(params.id);
      this.images = this.coworking.img;
      console.log(this.images)
    } )
  }

  ngOnInit() {
  }

}
