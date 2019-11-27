import { Component, OnInit } from "@angular/core";
import { CityModel } from "../models/CityModel";
import { CoffeeShopModel } from "../models/CoffeeShopModel";
import { CityListService } from "../_services/city-list.service";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"]
})
export class CityComponent implements OnInit {
  city: any;

  constructor(private cityService: CityListService) {}

  ngOnInit() {
    this.cityService.getCityData().subscribe(
      data => {
        this.city = data;
        // console.log("Current city value: " + this.city);
        console.log('Success');
      },
      error => {
        console.log(error);
      }
    );
  }
}
