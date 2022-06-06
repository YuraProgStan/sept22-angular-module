import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import {StarsRatingComponent} from "./components/stars-rating/stars-rating.component";
import {RouterModule} from "@angular/router";
import { MovieInfoComponent } from './components/movie-info/movie-info.component';



@NgModule({
    declarations: [
        MoviesListComponent,
        MovieComponent,
        PosterPreviewComponent,
        StarsRatingComponent,
        MovieInfoComponent,
    ],
    exports: [
        MoviesListComponent,
        StarsRatingComponent,
        MovieInfoComponent,
    ],
    imports: [
        CommonModule,
      RouterModule

    ]
})
export class MoviesListModule { }
