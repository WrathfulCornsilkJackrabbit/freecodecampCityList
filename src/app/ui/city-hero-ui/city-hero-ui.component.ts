import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';

@Component({
  selector: 'app-city-hero-ui',
  templateUrl: './city-hero-ui.component.html',
  styleUrls: ['./city-hero-ui.component.css']
})
export class CityHeroUiComponent implements OnInit {

  @Input() city: CityModel;

  constructor() { }

  ngOnInit() {
  }

}
