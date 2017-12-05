import { Component, OnInit, Output } from '@angular/core';
import { Bear } from '../bear.model';

@Component({
  selector: 'app-bears-list',
  templateUrl: './bears-list.component.html',
  styleUrls: ['./bears-list.component.css']
})
export class BearsListComponent implements OnInit {
  @Output() bears: Bear[] = [
    new Bear(
      'Smokey',
      1,
      'https://images.pexels.com/photos/213988/pexels-photo-213988.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      'Bear Likes...foraging, dumpsters, carcasses'),
    new Bear(
      'Bubu',
      2,
      'https://images.pexels.com/photos/34700/bear-animals-zoo-captivity.jpg?h=350&auto=compress&cs=tinysrgb',
      'berries,doughnuts')
  ];
  bearName = '';
  bearDescription = '';
  imgPath = '';
  addBear = false;

  constructor() { }

  ngOnInit() { }

  newBear() {
    this.addBear = !this.addBear;
  }
}
