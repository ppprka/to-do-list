import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  public task!: string;
  @Output() submitSend = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitSend.emit(this.task);
    console.log(this.task);
    this.task = '';
  }

}
