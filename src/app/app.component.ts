import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-components-data-binding-events';

  tasks: Task[] = [];

  handleAdd(task: Task) {
    this.tasks.push(task);
  }

  handleDone(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
