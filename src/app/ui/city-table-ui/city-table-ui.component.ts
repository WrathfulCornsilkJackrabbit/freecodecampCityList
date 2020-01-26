import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';
import { faMapMarkedAlt, faPlug, faWifi, faChair, faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-city-table-ui',
  templateUrl: './city-table-ui.component.html',
  styleUrls: ['./city-table-ui.component.css']
})
export class CityTableUiComponent implements OnInit {

  @Input() city: CityModel;

  iconMap = faMapMarkedAlt;
  iconPlug = faPlug;
  iconWifi = faWifi;
  iconChair = faChair;
  iconStart = faStar;

  constructor() { }

  ngOnInit() { }

}
