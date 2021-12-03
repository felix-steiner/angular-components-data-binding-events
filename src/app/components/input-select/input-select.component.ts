import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  priorities = [
    {id: 1, name: "Hoche Priorität"},
    {id: 2, name: "Mittlere Priorität"},
    {id: 3, name: "Niedrige Priorität"}
 ];
 selectedValue = null;

  constructor() { }

  ngOnInit(): void {
  }

}
