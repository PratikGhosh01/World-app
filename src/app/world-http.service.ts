import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/do"
import "rxjs/add/operator/catch"

@Injectable()
export class WorldHttpService {

  public url = "https://restcountries.eu/rest/v2/" //base url

  constructor(public _http: HttpClient) {

  }

//http call to get countries by region
  public getAllCountriesFromRegion(region): Observable<any> {

    return this._http.get(`${this.url}region/${region}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)

  }
//http call to get countries by subregion
  public getAllCountriesFromSubRegion(sub): Observable<any> {
    return this._http.get(`${this.url}subregion/${sub}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)

  }
  //http call to get single country data
  public getSingleCountryInfo(country): Observable<any> {

    return this._http.get(`${this.url}name/${country}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)

  }

//http call to get countries by language
  public getCountryByLanguage(code) {
    return this._http.get(`${this.url}lang/${code}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)
  }

//http call to get countries by currency
  public getCountryByCurrency(code): Observable<any> {
    return this._http.get(`${this.url}currency/${code}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag;topLevelDomain;alpha2Code;alpha3Code;population;area;latlng`)

  }


//error handler
  public handleError(err: HttpErrorResponse) {
    console.log("Error Handler");
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
