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
  private id: string;
  private name:String;
  private description:String;
  images: String[];

  constructor(private activatedRoute: ActivatedRoute, private coworkingsService: CoworkingsService) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id)
    this.coworkingsService.getCoworking(this.id).subscribe((data:any)=>{
      this.name = data.name;
      this.description = data.description;
      console.log(data)
      this.images = data.imagePath.split(',');
      console.log("images",this.images)
    })
  }

  ngOnInit() {    
  
  }

}
