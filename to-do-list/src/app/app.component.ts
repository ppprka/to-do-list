import {Component, OnInit} from '@angular/core';
import {StorageService} from "./storage.service";
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public tasks: Task [] = [];
  public color: string = '';
  public hideTasksFlag: boolean = false;
  public showImportantFlag: boolean = false;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.tasks = this.storageService.getTasks();
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
    this.storageService.saveTasks(this.tasks);
  }

  public deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.storageService.saveTasks(this.tasks);
  }

  public saveTask(task: Task, index: number): void {
    this.tasks[index] = task;
    this.storageService.saveTasks(this.tasks);
  }

  public changeColor(): void {
    this.color = Math.floor(Math.random() * 16777215).toString(16);
  }

  public hideTasks(): void {
    this.hideTasksFlag = !this.hideTasksFlag;
  }

  public showImportant(): void {
    this.showImportantFlag = !this.showImportantFlag;
  }

}
