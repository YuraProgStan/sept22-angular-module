import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesListService} from "../../services/movies-list.service";
import {IMovieDetails} from "../../interfaces/movie-details.interface";
import {urlsImage} from "../../../../constants/urls";
import {DataService} from "../../../../services/data.service";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  widthImage = urlsImage.w780
  movieDetails: IMovieDetails

  page: number;
  genre: number;
  constructor(private moviesListService: MoviesListService,
              private activatedRoute:ActivatedRoute,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.moviesListService.getById(id).subscribe(value => {
        this.movieDetails = value
      })
    })
  }

  back(): void{
   this.dataService.storage$.subscribe(value => {
      this.page = value.movies.pages;
       this.router.navigate(['/movies/page/', this.page], {relativeTo: this.activatedRoute})
   }
   )
  }

}
