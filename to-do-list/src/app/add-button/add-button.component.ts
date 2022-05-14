import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  public task!: string;

  @Output() submitSend = new EventEmitter<string>();
  @Output() hideTasksFlag = new EventEmitter<void>();

  public hidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  submitTask() {
    this.submitSend.emit(this.task);
    console.log(this.task);
    this.task = '';
  }

  hideTasks(hidden: boolean) {
    this.hideTasksFlag.emit()
    this.hidden = hidden;
  }

}
