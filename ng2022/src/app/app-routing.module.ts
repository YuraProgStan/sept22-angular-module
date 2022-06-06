import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main layot/main-layout/components/main-layout.component";
import { RouterModule, Route } from "@angular/router";
import {MoviesPageComponent} from "./main layot/movies-page/components/movies-page/movies-page.component";
import {HttpClientModule} from "@angular/common/http";
import {MoviesInfoPageComponent} from "./main layot/movies-info-page/movies-info-page.component";


const routes : Route[] = [
  {
    path: '', component : MainLayoutComponent,
    children: [
      {path: '',redirectTo: 'movies/page/1', pathMatch: 'full'},
      {
        path: 'movies/page/:pages', component: MoviesPageComponent,
      },
      {
        path: 'movies/:id', component: MoviesInfoPageComponent
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
