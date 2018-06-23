import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { WorldHttpService } from "../world-http.service"
import { Location } from "@angular/common"
import { Subscription } from 'rxjs/Subscription';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppInterface } from "../../app/application-interface"



@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  providers: [Location]
})
export class AllCountriesComponent implements OnInit {

  public allCountries: AppInterface[]
  public returnParameters: Subscription
  public currencyParameter: boolean = false
  public languageParameter: boolean = false
  public region: string
  public regionSelected: string
  public subregionSelected: string


  constructor(public _route: ActivatedRoute, public router: Router,
    public worldHttpService: WorldHttpService, public spinner: Ng4LoadingSpinnerService, public location: Location) {

  }

  ngOnInit() {
    this.spinner.show();
    this.returnParameters = this._route.queryParams.subscribe(
      params => {

        if (params["currency"]) {
          this.currencyParameter = true
          this.getCountryByCurrency(params["currency"])
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);

        } else if (params["language"]) {
          this.languageParameter = true
          this.getCountryByLanguage(params["language"])
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);
        } else {
          this.currencyParameter = false
          this.region = this._route.snapshot.paramMap.get("region")
          console.log(this.region)
          this.regionSelected = this.region
          this.subregionSelected = this.region



          this.worldHttpService.getAllCountriesFromRegion(this.region).subscribe(
            data => {

              this.allCountries = data
              setTimeout(() => {
                this.spinner.hide();
              }, 1500);
              console.log(this.allCountries);
            }, error => {
              console.log(error.errorMessage)
            }
          )

        }
      }
    )
  }

  public goback() {
    this.location.back();
  }

  getCountryByCurrency(code) {
    this.worldHttpService.getCountryByCurrency(code).subscribe(
      (data: any[]) => {
        this.allCountries = data
      }
    )
  }

  getCountryByLanguage(code) {
    this.worldHttpService.getCountryByLanguage(code).subscribe(
      (data: any[]) => {
        this.allCountries = data
      }
    )
  }

  public regionSelect(event) {
    this.spinner.show();
    this.worldHttpService.getAllCountriesFromRegion(event).subscribe(
      data => {

        this.allCountries = data
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        console.log(this.allCountries);
      }, error => {
        console.log(error.errorMessage)
      }
    )

  }

  public subregionSelect(event) {
    this.spinner.show();
    this.worldHttpService.getAllCountriesFromSubRegion(event).subscribe(
      data => {

        this.allCountries = data
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        console.log(this.allCountries);
      }, error => {
        console.log(error.errorMessage)
      }
    )

  }

}
