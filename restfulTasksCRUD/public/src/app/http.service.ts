import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
  }
  getTasks() {
    return this._http.get('/tasks');
  }
  addTask(newTask) {
    return this._http.post('/tasks', newTask);
  }
  getTask(_id) {
    return this._http.get('/tasks/${_id}');
  }
  updateTask(editTask) {
    console.log('http service id', editTask._id)
    return this._http.put('/tasks/' + editTask._id, editTask);
  }
  deleteTask(_id) {
    return this._http.delete('/tasks/' + _id);
  }
}
