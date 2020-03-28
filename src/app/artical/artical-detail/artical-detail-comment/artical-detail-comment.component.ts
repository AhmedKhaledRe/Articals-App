import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Comment } from 'src/app/artical/shared/comment.model';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-artical-detail-comment',
  templateUrl: './artical-detail-comment.component.html',
  styleUrls: ['./artical-detail-comment.component.sass']
})
export class ArticalDetailCommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() {
   }

  ngOnInit() {
  }

}

