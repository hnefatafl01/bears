import { Component, OnInit } from '@angular/core';
import { BearComponent } from '../bear/bear.component';
@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css']
})
export class BearsComponent implements OnInit {
  bears = [];
  bear: BearComponent;
  isDisabled = false;
  bearStatus;

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
  }

  ngOnInit() {
    // this.bear = new BearComponent('bobo', 1);
    // console.log(this.bear);
    // this.bear.id = 1;
    // this.bear.name = 'bobo';
  }

  onClick() {
    this.bearStatus = 'Added new bear';
    setTimeout(() => {
      this.bearStatus = '';
    }, 4000);
  }

}
