import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() tasks: Array<string> = [];

  public task: string = '';
  public disabled: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  onEdit(task: string){
    this.disabled = false;
  }

  onSave(task:string){
    this.task = task;
    this.disabled = true;
  }

  onDelete(task: string) {
    this.tasks.splice(this.tasks.indexOf(task),1);
  }

}
