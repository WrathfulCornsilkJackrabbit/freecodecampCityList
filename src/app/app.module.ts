import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { BadgeComponent } from './ui/badge/badge.component';
import { HomeComponent } from './home/home.component';
import { DemoUiComponent } from './demo-ui/demo-ui.component';
import { CityComponent } from './city/city.component';
import { CityHeroUiComponent } from './ui/city-hero-ui/city-hero-ui.component';
import { CityTableUiComponent } from './ui/city-table-ui/city-table-ui.component';
import { CityListService } from './_services/city-list.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeSearchComponent } from './ui/home-search/home-search.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      BadgeComponent,
      HomeComponent,
      HomeSearchComponent,
      DemoUiComponent,
      CityComponent,
      CityHeroUiComponent,
      CityTableUiComponent
   ],
   imports: [
      NgbModule,
      HttpClientModule,
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      CityListService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
