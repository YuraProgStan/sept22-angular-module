import {Component, Input, OnInit} from '@angular/core';
import {MoviesListService} from "../../services/movies-list.service";
import {apiKey, imageURL, urlsImage} from "../../../../constants/urls";

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.css']
})
export class PosterPreviewComponent implements OnInit {
  @Input()
  urlImage: string;

  @Input()
  title: string;

  @Input()
  widthImage: string


  myImage: string;

  titleImage: string

  constructor(private moviesListService: MoviesListService) {
  }

  ngOnInit(): void {
    this.myImage = this.moviesListService.getImage(this.widthImage, this.urlImage);
    this.titleImage = this.title
  }

}
