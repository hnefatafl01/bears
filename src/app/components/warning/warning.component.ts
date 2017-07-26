import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <div *ngIf="warning === true" class="panel panel-warning">
      <div class="panel-heading text-center">Warning!</div>
      <div class="panel-body">Sorry, Invalid Input</div>
    </div>
  `,
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warning = false;

  constructor() { }

  ngOnInit() {
  }

}
