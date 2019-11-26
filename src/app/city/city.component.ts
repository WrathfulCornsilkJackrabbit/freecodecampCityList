import { Component, OnInit } from '@angular/core';
import { CityModel } from '../models/CityModel';
import { CoffeeShopModel } from '../models/CoffeeShopModel';
import { CityListService } from '../_services/city-list.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city: CityModel;

  constructor(private cityService: CityListService) { }

  ngOnInit() {
    this.city = this.cityService.getMockCityData();
  }
}
