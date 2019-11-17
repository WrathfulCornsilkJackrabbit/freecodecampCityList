import { Component, OnInit } from '@angular/core';
import { CityModel } from '../models/CityModel';
import { CoffeeShopModel } from '../models/CoffeeShopModel';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city: CityModel = {
    name: 'Norwich',
    imagePath: 'Norwich',
    coffeeShops: [],
  };

  constructor() { }

  ngOnInit() {
    // TODO TEMP
    for (let i = 0; i < 10; i++) {
      this.city.coffeeShops.push(
        new CoffeeShopModel('Marzano Cafe & Bar', 'Norwich Forum', false, true, true)
      );
    }
  }

}
