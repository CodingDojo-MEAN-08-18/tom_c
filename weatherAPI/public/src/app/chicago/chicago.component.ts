import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather = {};

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getChicagoWeather();
  }

  getChicagoWeather() {
    let observable = this.httpService.getWeather('chicago');
    observable.subscribe(data => {
      console.log('Chicago checks in as', data);
      this.weather = data;
    })
  }

}
