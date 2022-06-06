import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMovieResults} from "../../interfaces/movies-list.interface";
import {MoviesListService} from "../../services/movies-list.service";
import {urlsImage} from "../../../../constants/urls";
import {DataService} from "../../../../services/data.service";
import {IGenre, IGenres} from "../../../genres-list/interfaces/genres-list.interface";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  genreNames: Array<string> | [] = [];
  widthImage = urlsImage.w300
  @Input()
  movie: IMovieResults

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    if (this.movie.genre_ids) {
      this.genreNames = this.dataService.getGenresNameFromState(this.movie.genre_ids);
    }
  }

}
