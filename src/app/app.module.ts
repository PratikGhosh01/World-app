import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from "@angular/router"
import { WorldHttpService } from './world-http.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    SingleCountryComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "all-countries/:region", component: AllCountriesComponent },
      { path: "all-countries/:code", component: AllCountriesComponent },
      { path: "single-country/:name", component: SingleCountryComponent },
      { path: "**", component: HomeComponent },



    ])

  ],
  providers: [WorldHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
