import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../task";
import {EmailValidator, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {

  public form: FormGroup;

  @Output() public submitSend = new EventEmitter<Task>();
  @Output() public hideTasksFlag = new EventEmitter<void>();
  @Output() public showImportantFlag = new EventEmitter<void>();

  public hidden: boolean = true;
  public important: boolean = false;

  constructor() {
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required,Validators.nullValidator]),
      isImportant: new FormControl(null)
    })
  }

  public submitTask(): void {
    let task = this.form.getRawValue();
    this.submitSend.emit(task);
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
