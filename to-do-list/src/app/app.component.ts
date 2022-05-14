import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tasks: string [] = [];

  ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'))||[];
  }

  addTask(task: string) {
    console.log(task);
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  saveTask(task: string, index: number){
    this.tasks[index] = task;
    console.log(task)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }




}
