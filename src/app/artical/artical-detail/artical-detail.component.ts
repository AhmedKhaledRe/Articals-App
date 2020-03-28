import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticalsApiService } from '../shared/articals-api.service';
import { Artical } from '../shared/artical.model';
import { CommentService } from 'src/app/artical/shared/comment.service';
import { Comment } from 'src/app/artical/shared/comment.model';

@Component({
  selector: 'app-artical-detail',
  templateUrl: './artical-detail.component.html',
  styleUrls: ['./artical-detail.component.sass']
})
export class ArticalDetailComponent implements OnInit {

  artical: Artical;
  comments: Comment[] = [];


  constructor(private route: ActivatedRoute,
              private articalService: ArticalsApiService,
              private commentService: CommentService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params) => {
        this.getComment(params.articalId);
      }
    );

    this.route.params.subscribe(
      (params) => {
        this.getArtical(params.articalId);
      });

  }

  getArtical(articalId: string) {
    this.articalService.getArticalById(articalId).subscribe(
      (artical: Artical) => {
        this.artical = artical;
      });
  }

  getComment(articalId: string) {
    this.commentService.getPostComments(articalId).subscribe(
      (comments: Comment[]) => {
        this.comments = comments;
      }
    );
  }



}
