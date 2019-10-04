import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoworkingsService, Coworking } from 'src/app/services/coworkings.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.component.html',
  styleUrls: ['./coworking.component.css']
})
export class CoworkingComponent implements OnInit {

  private coworking:Coworking;
  private images:Array<String>;
  private id: string;

  constructor(private activatedRoute: ActivatedRoute, private coworkingsService: CoworkingsService) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.coworkingsService.getCoworking(this.id).subscribe((data:Coworking)=>{
      this.coworking = data;
      this.images = data.imagePath;
      console.log(this.images)
    })
  }

  ngOnInit() {    
  
  }

}
