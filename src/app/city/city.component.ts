import { Component, OnInit } from '@angular/core';
import { CityModel } from '../models/CityModel';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cityDataModel: CityModel;

  constructor() { }

  ngOnInit() {
    this.cityDataModel = new CityModel();
    this.cityDataModel.name = 'Norwich';
    this.cityDataModel.imagePath = 'Norwich';
  }

}
