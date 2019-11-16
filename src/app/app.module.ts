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
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
