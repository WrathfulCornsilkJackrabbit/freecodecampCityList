import { Injectable } from "@angular/core";
import { CoffeeShopModel } from '../models/CoffeeShopModel';
import { CityModel } from '../models/CityModel';

@Injectable({
  providedIn: "root"
})
export class CityListService {

  city: CityModel = {
    name: 'Norwich',
    imagePath: 'Norwich',
    coffeeShops: [],
  };

  constructor() {}

  getMockCityData() {
    for (let i = 0; i < 10; i++) {
      this.city.coffeeShops.push(
        new CoffeeShopModel(
          "Marzano Cafe & Bar",
          "Norwich Forum",
          false,
          true,
          true
        )
      );
    }
    return this.city;
  }
}
