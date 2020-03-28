import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ArticalsApiService } from './shared/articals-api.service';
import { CommentService } from './shared/comment.service';
import { ArticalListComponent } from './articals-list/artical-list.component';
import { ArticalListItemComponent } from './artical-list-item/artical-list-item.component';
import { ArticalDetailComponent } from './artical-detail/artical-detail.component';
import { ArticalComponent } from './artical.component';
import { ArticalDetailCommentComponent } from './artical-detail/artical-detail-comment/artical-detail-comment.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: 'articals',
    component: ArticalComponent,
    children: [
      { path: '', component: ArticalListComponent },
      { path: ':articalId', component: ArticalDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    ArticalListComponent,
    ArticalListItemComponent,
    ArticalComponent,
    ArticalDetailComponent,
    ArticalDetailCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ArticalsApiService,
    CommentService,

  ]
})
export class ArticalModule {}
