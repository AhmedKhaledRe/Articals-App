import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artical-list-item',
  templateUrl: './artical-list-item.component.html',
  styleUrls: ['./artical-list-item.component.sass']
})
export class ArticalListItemComponent implements OnInit {

  @Input() artical: any;

  constructor() { }

  ngOnInit() {
  }

}
