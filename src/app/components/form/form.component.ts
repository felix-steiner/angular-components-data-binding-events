import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Priority } from 'src/app/models/priority';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() add = new EventEmitter<Task>();

  priorities: Priority[] = [
    {id: 1, name: 'Hohe Priorität', color: '#e74c3c'},
    {id: 2, name: 'Mittlere Priorität', color: '#f1c40f'},
    {id: 3, name: 'Niedrige Priorität', color: '#2ecc71'}
  ];
  selectedPriority = this.priorities[0];
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

  triggerAdd() {
    this.add.emit({title: this.title, priority: this.selectedPriority});
    this.selectedPriority = this.priorities[0];
    this.title = '';
  }

}
