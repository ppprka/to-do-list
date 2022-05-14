import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tasks: string [] = [];
  public color: string = '';
  public hideTasksFlag: boolean = false;

  ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'))||[];
  }

  addTask(task: string) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  saveTask(task: string, index: number){
    this.tasks[index] = task;
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  changeColor(){
    this.color = Math.floor(Math.random()*16777215).toString(16);
  }

  hideTasks(){
    this.hideTasksFlag ? this.hideTasksFlag = false : this.hideTasksFlag = true;
    console.log(this.hideTasksFlag)
  }


}
