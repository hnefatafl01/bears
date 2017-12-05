import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bear-item',
  templateUrl: './bear-item.component.html',
  styleUrls: ['./bear-item.component.css']
})
export class BearItemComponent implements OnInit {
  @Input() bear;
  @Output() emitBear = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.bear = {
      // id: this.route.snapshot.params['id'],
      // name: this.bear.name,
      // imageUrl: this.bear.imageUrl,
      // description: this.bear.description
    // };
  }

  onShowDetail() {
    console.log(this.bear);
    this.emitBear.emit(this.bear);
    console.log('item params', this.route.snapshot.params);

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log('params', params);
    //      this.router.navigate([params], { relativeTo: this.route });
    //   }
    // );
  }

}
