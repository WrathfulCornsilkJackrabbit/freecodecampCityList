import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';

@Component({
  selector: 'app-city-table-ui',
  templateUrl: './city-table-ui.component.html',
  styleUrls: ['./city-table-ui.component.css']
})
export class CityTableUiComponent implements OnInit {

  @Input() city: any;

  constructor() { }

  ngOnInit() { }

}
