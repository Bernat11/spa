import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoworkingsService {

  private httpClient:HttpClient;
  private coworking:any;

  private coworking2:Coworking[] = []

  private coworking3:Coworking[] = [
    {
      name: "We Work - Poblenou",
      description: "WeWork is a global force in workspace community. Come see WeWork Glòries and find a coworking space with all your favorite perks.",
      district: "Sant Martí",
      imagePath: ["./../../../../assets/img/coworking/wework barcelona.jpg"],
      price: 600
    },
    {
      name: "Aticco",
      description: "Barcelona's most exciting collaborative workspace. Ready to suit your needs!",
      district: "Sant Martí",
      imagePath: ["./../../../../assets/img/coworking/aticco_bcn.jpg", "./../../../../assets/img/coworking/attico2.jpg", "./../../../../assets/img/coworking/attico3.jpg"],
      price: 500
    },
    {
      name: "Pipoca",
      description: "Pipoca Coworking is located in the heart of Barcelona. It is a space where your ideas become projects and where these become reality.",
      district: "Ciutat Vella",
      imagePath: ["./../../../../assets/img/coworking/pipoca.jpg"],
      price: 650
    },
    {
      name: "Quart de nou studio",
      description: "Espacio coworking a 200 metros de la playa situado en el centro de la Barceloneta!",
      district: "Ciutat Vella",
      imagePath: ["./../../../../assets/img/coworking/quartdenou.jpg"],
      price: 490
    },
    {
      name: "We Work - Poblenou",
      description: "WeWork is a global force in workspace community. Come see WeWork Glòries and find a coworking space with all your favorite perks.",
      district: "Sant Martí",
      imagePath: ["./../../../../assets/img/coworking/wework barcelona.jpg"],
      price: 600
    },
    {
      name: "Aticco",
      description: "Barcelona's most exciting collaborative workspace. Ready to suit your needs!",
      district: "Sant Martí",
      imagePath: ["./../../../../assets/img/coworking/aticco_bcn.jpg"],
      price: 500
    },
    {
      name: "Pipoca",
      description: "Pipoca Coworking is located in the heart of Barcelona. It is a space where your ideas become projects and where these become reality.",
      district: "Ciutat Vella",
      imagePath: ["./../../../../assets/img/coworking/pipoca.jpg"],
      price: 650
    },
    {
      name: "Quart de nou studio",
      description: "Espacio coworking a 200 metros de la playa situado en el centro de la Barceloneta!",
      district: "Ciutat Vella",
      imagePath: ["./../../../../assets/img/coworking/quartdenou.jpg"],
      price: 490
    }
  ]

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
    this.getCoworkings();
  }

  getCoworkings(){
    this.httpClient.get(`http://localhost:8080/api/v1/coworkings`).subscribe(data=>{
    })
  }

  getCoworking( id: string ){
    return this.httpClient.get(`http://localhost:8080/api/v1/coworkings/${id}`);
  }
}

export interface Coworking{
  name: string;
  description: string;
  district: string;
  imagePath: string[];
  price: number;
  id?: number;
};
