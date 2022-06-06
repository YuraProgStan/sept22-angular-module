import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MoviesListService} from "../../services/movies-list.service";
import {IMoviesList} from "../../interfaces/movies-list.interface";
import {DataService} from "../../../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  genre: string
  page: number
  movies: IMoviesList

  constructor(private moviesListService: MoviesListService,
              private dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {
    dataService.storage$.subscribe(value => {
      this.page = value.movies.pages;
      this.genre = value.movies.genres;
      if (this.genre) {
        this.moviesListService.getAllByGenrePage(this.page, this.genre).subscribe(value => this.movies = value);

      } else {
        this.moviesListService.getAllMovies(this.page).subscribe(value => this.movies = value);
      }
    });
  }


  ngOnInit(): void {

  }


  prev(pages: number) {
    pages = pages - 1;
    this.dataService.updatePage(pages);
    this.router.navigate(['/movies/page/', pages], {relativeTo: this.activatedRoute, state: {data: pages}})
  }

  next(pages: number) {
    pages = pages + 1;
    this.dataService.updatePage(pages);
    this.router.navigate(['/movies/page/', pages], {relativeTo: this.activatedRoute, state: {data: pages}})
  }
}
