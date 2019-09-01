import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { CoworkingsService, Coworking } from 'src/app/services/coworkings.service';

@Component({
  selector: 'app-coworkings',
  templateUrl: './coworkings.component.html',
  styleUrls: ['./coworkings.component.css']
})
export class CoworkingsComponent implements OnInit {

  coworkings: Coworking[] = [];


  constructor(public coworkingsService: CoworkingsService) {
    
  }

  ngOnInit() {
    this.coworkings = this.coworkingsService.getCoworkings();
    console.log(this.coworkings);
  }
  
}
