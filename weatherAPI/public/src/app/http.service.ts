import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_key: String = '5598aa6adbdd9f30677b8c3e9762d5e9';

  constructor(private _http: HttpClient) { }

  getWeather(location) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=imperial&APPID='+this.api_key);
  }
}
