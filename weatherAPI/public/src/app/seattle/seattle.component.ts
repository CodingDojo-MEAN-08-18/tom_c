import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather = {};

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getSeattleWeather();
  }

  getSeattleWeather() {
    let observable = this.httpService.getWeather('seattle');
    observable.subscribe(data => {
      console.log('Seattle checks in as', data);
      this.weather = data;
    })
  }

}
