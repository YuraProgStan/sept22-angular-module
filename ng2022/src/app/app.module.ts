import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';

import {UserService, PostService, CommentService} from './services';
import {Route, RouterModule} from "@angular/router";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children:[
    {path: '', redirectTo: 'users-page', pathMatch: 'full'},
  {path: 'users-page', component: UsersComponent,
    children: [
      //users-page/user-details/:ID
      {path: 'user-details/:id', component: UserDetailsComponent}
    ]},
  // {path: 'user-details/:id', component: UserDetailsComponent},
  {path: 'posts-page', component: PostsComponent,
    children: [
      {path: 'post-details/:id', component: PostDetailsComponent}
    ]},
  {path: 'comments-page', component: CommentsComponent,
    children: [
      {path: ':id', component: CommentDetailsComponent}
    ]},
]}];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
    MainLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
