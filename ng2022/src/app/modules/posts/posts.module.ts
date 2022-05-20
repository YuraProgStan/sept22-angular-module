import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from "./services/post.service";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {PostsResolver} from "./services/resolvers/posts.resolver";
import {PostResolver} from "./services/resolvers/post.resolver";
import {PostGuard} from "./services/guard/post.guard";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  providers: [PostService, PostsResolver, PostResolver, PostGuard]
})
export class PostsModule { }
