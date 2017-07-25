import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
    <div class="panel panel-success">
      <div class="panel-heading text-center">Successfully added new Bear!</div>
      <div class="panel-body">Valid Input</div>
    </div>
  `,
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
