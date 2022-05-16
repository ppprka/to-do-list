import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  @Input() public task!: Task;
  @Input() public hideTasksFlag: boolean;
  @Output() public itemDeleted = new EventEmitter<void>();
  @Output() public itemSave = new EventEmitter<Task>();

  public disabled: boolean = true;

  constructor() {
  }

  public onEdit(): void {
    this.disabled = false;
  }

  public onSave(task: Task): void {
    this.disabled = true;
    this.itemSave.emit(task);
  }

  public onDelete(): void {
    this.itemDeleted.emit();
  }

}
