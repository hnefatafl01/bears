import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bear',
  templateUrl: './bear.component.html',
  styleUrls: ['./bear.component.css']
})
export class BearComponent implements OnInit {
  name = 'chuck';
  id = 0;

  // constructor(name: string, id: number) {
  //   this.name = name;
  //   this.id = id;
  // }

  ngOnInit() {
  }

}
