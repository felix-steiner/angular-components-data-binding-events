import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() doneOuter = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }
  
  handleDoneInner(task: Task) {
    this.doneOuter.emit(task);
  }
}
