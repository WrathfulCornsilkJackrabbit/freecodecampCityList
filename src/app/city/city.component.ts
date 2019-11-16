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
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );
    this.city.coffeeShops.push(
      new CoffeeShopModel('Marzano Cafe & Bar')
    );

    console.log('DEBUG size: ' + this.city.coffeeShops.length);
  }

}
