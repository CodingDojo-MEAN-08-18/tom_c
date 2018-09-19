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
  newTask: any;
  selectedTask = null;
  editTask = null;
  constructor(private _httpService: HttpService) {}
  ngOnInit() { 
    this.newTask = {title: '', description: ''}
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('Got data back from post', data);
      this.newTask = {title: '', description: ''};
    });
  }

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
  onButtonEdit(selectedTask: any) {
    console.log('editing...', selectedTask);
    this.editTask = this.editTask === selectedTask ? null : selectedTask;
    this.selectedTask = null;
  }

  onUpdate(editTask: any) {
    let observable = this._httpService.updateTask(editTask)
    observable.subscribe(data => {
      console.log('Updating task...', data);
      this.selectedTask = data;
      this.editTask = null;
    });
  }

  onButtonDelete(selectedTask: any) {
    let observable = this._httpService.deleteTask(selectedTask._id);
    observable.subscribe(data => {
      console.log('Deleted...', data);
      this.selectedTask = null;
      this.editTask = null;
    })
  }
};
