import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  public task!: string;
  @Output() onSubmitSend = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onSubmitSend.emit(this.task);
    this.task = '';
  }

}
