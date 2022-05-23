import {Component, OnInit} from '@angular/core';
import {StorageService} from "./storage.service";
import {Task} from "./task";
import {Store} from "@ngrx/store";
import {selectAllTasks} from "./state/tasks/task.selectors";
import {addTask, loadTasks, removeTask} from "./state/tasks/task.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  public allTasks$ = this.store.select(selectAllTasks);

  public description = '';
  public isImportant = false;

  public color = '';
  public hideTasksFlag: boolean = false;
  public showImportantFlag: boolean = false;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }

  public addTask(task: Task): void {
    this.store.dispatch(removeTask({id: task.id}))
    this.store.dispatch(addTask({id: task.id, description: task.description, isImportant: task.isImportant}))
    this.description = '';
    this.isImportant = false;
  }

  public deleteTask(task: Task): void {
    this.store.dispatch(removeTask({id: task.id}))
  }

  public hideTasks(): void {
    this.hideTasksFlag = !this.hideTasksFlag;
  }

  public showImportant(): void {
    this.showImportantFlag = !this.showImportantFlag;
  }

  public changeColor(): void {
    this.color = Math.floor(Math.random() * 16777215).toString(16);
  }
}
