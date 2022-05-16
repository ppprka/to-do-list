import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../task";
import {EmailValidator, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {

  public task: Task = new Task();
  public form: FormGroup;

  @Output() submitSend = new EventEmitter<Task>();
  @Output() hideTasksFlag = new EventEmitter<void>();
  @Output() showImportantFlag = new EventEmitter<void>();

  public hidden: boolean = true;
  public important: boolean = false;

  constructor() {
    this.form = new FormGroup({
      task: new FormControl('', [Validators.required,Validators.nullValidator]),
      important: new FormControl(null)
    })
  }

  public submitTask(): void {
    this.task.description = this.form.get('task').value;
    this.task.isImportant = this.form.get('important').value;
    this.submitSend.emit(this.task);
    this.task = new Task();
    this.form.reset();
  }

  public hideTasks(hidden: boolean): void {
    this.hideTasksFlag.emit()
    this.hidden = hidden;
  }

  public showImportant(important: boolean): void {
    this.showImportantFlag.emit()
    this.important = important;
  }

}
