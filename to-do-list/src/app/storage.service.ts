import {Injectable} from '@angular/core';
import {Task} from "./task";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public saveTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  public getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks')) || []
  }
}
