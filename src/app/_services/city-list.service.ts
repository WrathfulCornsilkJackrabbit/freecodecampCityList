import { Injectable } from "@angular/core";
import { CoffeeShopModel } from "../models/CoffeeShopModel";
import { CityModel } from "../models/CityModel";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CityListService {
  private REST_API_SERVER = "https://api.myjson.com/bins/u7eh6";

  constructor(private httpClient: HttpClient) {}

  getMockCityData() {
    let city: CityModel = {
      id: 1,
      name: "Norwich",
      imagePath: "Norwich",
      coffeeShops: []
    };

    for (let i = 0; i < 10; i++) {
      city.coffeeShops.push(
        new CoffeeShopModel(
          1,
          "Marzano Cafe & Bar",
          "Norwich Forum",
          false,
          true,
          true
        )
      );
    }
    return city;
  }

  getCityData() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
