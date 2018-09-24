import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = {};

  constructor(private httpService: HttpService) { }


  ngOnInit() {
    this.getBurbankWeather();
  }

  getBurbankWeather() {
    let observable = this.httpService.getWeather('burbank');
    observable.subscribe(data => {
      console.log('Burbank checks in as', data);
      this.weather = data;
    })
  }

}
