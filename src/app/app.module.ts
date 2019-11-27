import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoUiComponent } from './demo-ui/demo-ui.component';
import { CityComponent } from './city/city.component';
import { CityHeroUiComponent } from './ui/city-hero-ui/city-hero-ui.component';
import { CityTableUiComponent } from './ui/city-table-ui/city-table-ui.component';
import { CityListService } from './_services/city-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
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
