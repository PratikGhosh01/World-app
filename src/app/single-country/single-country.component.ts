import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { WorldHttpService } from "../world-http.service"
import { Location } from "@angular/common"
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppInterface } from "../../app/application-interface"

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css'],
  providers: [Location]
})
export class SingleCountryComponent implements OnInit {

  public singleCountryInfo: AppInterface[]

  constructor(public _route: ActivatedRoute, public router: Router,
    public worldHttpService: WorldHttpService, public location: Location, public spinner: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    let country = this._route.snapshot.paramMap.get("name")
    this.worldHttpService.getSingleCountryInfo(country).subscribe(
      data => {
        this.singleCountryInfo = data;
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        console.log(data)

      }, error => {
        console.log(error.errorMessage)
      }
    )
  }


  public goback() {
    this.location.back();
  }

}
