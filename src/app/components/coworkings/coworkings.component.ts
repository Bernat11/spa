import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { CoworkingsService, Coworking } from 'src/app/services/coworkings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coworkings',
  templateUrl: './coworkings.component.html',
  styleUrls: ['./coworkings.component.css']
})
export class CoworkingsComponent implements OnInit {

  coworkings: Coworking[] = [];

  imagePath: String[];


  constructor(public coworkingsService: CoworkingsService) {
    
  }

  ngOnInit() {
    this.coworkingsService.getCoworkings().subscribe(
      (res: any) => {
        this.coworkings = res; 
        console.log('res is ', this.coworkings[0].imagePath);
        this.imagePath = this.coworkings[0].imagePath;
      });
    }
  }
  
