import { Injectable } from '@angular/core';
import { Task } from '../components/models/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  getTask(): Task[] {
    if (localStorage.getItem('tasks') == null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks')!)
    }
    return this.tasks;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  addcita(task: Task): void {
    this.tasks.unshift(task);
    if (localStorage.getItem('tasks') == null) {
      this.tasks = [];
      this.tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));

    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks')!)
      this.tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  deletecita(task:Task){
    for(let i = 0; this.tasks.length; i++){
      if(task == this.tasks[i]){
this.tasks.splice(i,1);
localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}

