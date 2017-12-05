import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bears-detail',
  templateUrl: './bears-detail.component.html',
  styleUrls: ['./bears-detail.component.css']
})
export class BearsDetailComponent implements OnInit {
  @Input() bear;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('detail loaded');
    console.log('detail bear', this.bear);
    console.log('detail params', this.route.snapshot.params['id']);
  }
}
