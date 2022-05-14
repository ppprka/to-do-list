import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() public task!: string;
  @Input() public hideTasksFlag: boolean;
  @Output() public itemDeleted = new EventEmitter<void>();
  @Output() public itemSave = new EventEmitter<string>();

  public disabled: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  onEdit(task: string){
    this.disabled = false;
  }

  onSave(task:string){
    this.task = task;
    this.disabled = true;
    console.log(task)
    this.itemSave.emit(this.task);
  }

  onDelete(task: string) {
    this.itemDeleted.emit();
  }

}
