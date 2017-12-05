import { Component, OnInit, Input } from '@angular/core';
import { Bear } from '../bear.model';

@Component({
  selector: 'app-bear-form',
  templateUrl: './bear-form.component.html',
  styleUrls: ['./bear-form.component.css']
})
export class BearFormComponent implements OnInit {
  @Input() bears;
  constructor() { }

  ngOnInit() {}

  addBear(inputName, imgPath, inputDescription) {
    const bearId = this.bears.length;
    this.bears.push(new Bear(inputName.value, bearId, imgPath.value, inputDescription.value));
    console.log(this.bears);
  }
}
