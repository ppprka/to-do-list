import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Task} from "../task";
import {FormControl, FormGroup} from "@angular/forms";
import {StringSplitPipe} from "./string-split.pipe";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnChanges {

  public form: FormGroup;

  @Input() public task!: Task;
  @Input() public hideTasksFlag: boolean;
  @Output() public itemDeleted = new EventEmitter<void>();
  @Output() public itemSave = new EventEmitter<Task>();

  public disabled: boolean = true;

  constructor() {
    this.form = new FormGroup({
      description: new FormControl(null),
      isImportant: new FormControl(null)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['task']?.currentValue;
    if (change) {
      console.log(change)
      this.form.setValue({
        description: change.description,
        isImportant: change.isImportant || false
      })
    }
  }

  public onEdit(): void {
    this.disabled = false;
  }

  public onSave(): void {
    this.disabled = true;
    this.itemSave.emit(this.form.value);
  }

  public onDelete(): void {
    this.itemDeleted.emit();
  }


}
