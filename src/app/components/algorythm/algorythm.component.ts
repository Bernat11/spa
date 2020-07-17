import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorythm',
  templateUrl: './algorythm.component.html',
  styleUrls: ['./algorythm.component.css']
})
export class AlgorythmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  districts: Array<String> = ['Ciutat Vella', 'Eixample', 'Sants-Montjuïc', 'Les Corts', 
  'Sarrià-Sant Gervasi', 'Gràcia', 'Horta-Guinardó', 'Nou Barris', 'Sant Andreu', '	Sant Martí']

  lat = 41.386848;
  lng = 2.169840;

}
