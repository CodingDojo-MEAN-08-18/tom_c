import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks = [];
  selectedTask = null;
  constructor(private _httpService: HttpService) {}
  ngOnInit() { }

  getAllTasks() {
    console.log('Getting tasks...');
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { 
      console.log('Got our dang tasks!', data);
      this.tasks = data['tasks'];
    });
  }
  onButtonClick(task: any) { 
    console.log(`Click event is working with event: `, task);
    this.selectedTask = this.selectedTask === task ? null : task;
}
