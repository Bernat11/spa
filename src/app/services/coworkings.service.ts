import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoworkingsService {

  private coworking:Coworking[] = [
    {
      name: "We Work - Poblenou",
      description: "WeWork is a global force in workspace community. Come see WeWork Glòries and find a coworking space with all your favorite perks.",
      district: "Sant Martí",
      img: ["./../../../../assets/img/coworking/wework barcelona.jpg"],
      price: 600
    },
    {
      name: "Aticco",
      description: "Barcelona's most exciting collaborative workspace. Ready to suit your needs!",
      district: "Sant Martí",
      img: ["./../../../../assets/img/coworking/aticco_bcn.jpg", "./../../../../assets/img/coworking/attico2.jpg", "./../../../../assets/img/coworking/attico3.jpg"],
      price: 500
    },
    {
      name: "Pipoca",
      description: "Pipoca Coworking is located in the heart of Barcelona. It is a space where your ideas become projects and where these become reality.",
      district: "Ciutat Vella",
      img: ["./../../../../assets/img/coworking/pipoca.jpg"],
      price: 650
    },
    {
      name: "Quart de nou studio",
      description: "Espacio coworking a 200 metros de la playa situado en el centro de la Barceloneta!",
      district: "Ciutat Vella",
      img: ["./../../../../assets/img/coworking/quartdenou.jpg"],
      price: 490
    },
    {
      name: "We Work - Poblenou",
      description: "WeWork is a global force in workspace community. Come see WeWork Glòries and find a coworking space with all your favorite perks.",
      district: "Sant Martí",
      img: ["./../../../../assets/img/coworking/wework barcelona.jpg"],
      price: 600
    },
    {
      name: "Aticco",
      description: "Barcelona's most exciting collaborative workspace. Ready to suit your needs!",
      district: "Sant Martí",
      img: ["./../../../../assets/img/coworking/aticco_bcn.jpg"],
      price: 500
    },
    {
      name: "Pipoca",
      description: "Pipoca Coworking is located in the heart of Barcelona. It is a space where your ideas become projects and where these become reality.",
      district: "Ciutat Vella",
      img: ["./../../../../assets/img/coworking/pipoca.jpg"],
      price: 650
    },
    {
      name: "Quart de nou studio",
      description: "Espacio coworking a 200 metros de la playa situado en el centro de la Barceloneta!",
      district: "Ciutat Vella",
      img: ["./../../../../assets/img/coworking/quartdenou.jpg"],
      price: 490
    }
  ]

  constructor() { }

  getCoworkings():Coworking[]{
    return this.coworking;
  }

  getCoworking( idx: string ){
    return this.coworking[idx];
  }
}

export interface Coworking{
  name: string;
  description: string;
  district: string;
  img: string[];
  price: number;
  idx?: number;
};
