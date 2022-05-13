import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  public tasks: Array<string> = [];

  addTask(task: string) {
    this.tasks.push(task);
  }
}
