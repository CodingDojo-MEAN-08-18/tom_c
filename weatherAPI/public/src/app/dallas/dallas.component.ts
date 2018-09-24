import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather = {};

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getDallasWeather();
  }

  getDallasWeather() {
    let observable = this.httpService.getWeather('dallas');
    observable.subscribe(data => {
      console.log('Dallas checks in as', data);
      this.weather = data;
    })
  }


}
