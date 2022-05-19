import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent},
  {path: 'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule) },
  // {path: 'posts', loadChildren:() => import('./posts/posts.module').then(m => m.PostsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
