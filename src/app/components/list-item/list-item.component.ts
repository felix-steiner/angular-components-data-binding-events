import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() doneInner = new EventEmitter<Task>();
  borderStyle = '';

  constructor() { }

  ngOnInit(): void {
    this.borderStyle = `10px solid ${this.task.priority.color}`;
  }

  finishTask() {
    this.doneInner.emit(this.task);
  }
}
