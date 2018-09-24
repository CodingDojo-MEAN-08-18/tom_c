import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather = {};

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getSanJoseWeather();
  }

  getSanJoseWeather() {
    let observable = this.httpService.getWeather('san+jose');
    observable.subscribe(data => {
      console.log('San Jose checks in as', data);
      this.weather = data;
    })
  }

}
