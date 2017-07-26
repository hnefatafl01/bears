import { Component, OnInit } from '@angular/core';
import { BearComponent } from '../bear/bear.component';
@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css']
})
export class BearsComponent implements OnInit {
  bears = [{id: 1, name: 'Booboo'}, {id: 2, name: 'smokey' }];
  bearId = this.bears.length;
  isDisabled;
  bearStatus;
  bearName = '';
  newBear: BearComponent;
  topFive;
  // badInput;

  constructor() {
    this.topFive = this.bearId < 6 ? 'green' : 'red';
    console.log(this.topFive);
  }

  ngOnInit() {
  }

  onClick() {
    this.bearId++;
    this.newBear = new BearComponent();
    this.newBear.id = this.bearId;
    this.newBear.name = this.bearName;
    this.bears.unshift(this.newBear);
    console.log(this.bears);
    this.bearStatus = 'Added new bear ' + this.bearName;
    setTimeout(() => {
      this.bearStatus = '';
    }, 10000);
  }

  getInputLength() {
    if (this.bearName.length > 20 || this.bearName.length < 3) {
      return true;
    } else {
      return false;
    }
  }
}
