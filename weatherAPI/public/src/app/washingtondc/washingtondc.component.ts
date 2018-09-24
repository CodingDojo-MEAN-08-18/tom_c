import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washingtondc',
  templateUrl: './washingtondc.component.html',
  styleUrls: ['./washingtondc.component.css']
})
export class WashingtondcComponent implements OnInit {
  weather = {};

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getWashingtonWeather();
  }

  getWashingtonWeather() {
    let observable = this.httpService.getWeather('district+of+columbia');
    observable.subscribe(data => {
      console.log('Washington DC checks in as', data);
      this.weather = data;
    })
  }
}
