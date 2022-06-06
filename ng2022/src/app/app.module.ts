import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainLayoutComponent } from './main layot/main-layout/components/main-layout.component';
import { HeaderComponent } from './main layot/header/components/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { MoviesPageComponent } from './main layot/movies-page/components/movies-page/movies-page.component';
import {GenresListModule} from "./modules/genres-list/genres-list.module";
import {MoviesListModule} from "./modules/movies-list/movies-list.module";
import { MoviesInfoPageComponent } from './main layot/movies-info-page/movies-info-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MoviesPageComponent,
    MoviesInfoPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GenresListModule,
    MoviesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
