import {Component, Input, OnInit} from '@angular/core';
import {StarsRatingService} from "../../../../services/stars-rating.service";

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnInit {
  @Input()
  voteAverage: number

  rating: any;

  constructor(private starsRatingService: StarsRatingService) {
  }

  ngOnInit(): void {
    if (this.voteAverage) {
    this.rating = this.starsRatingService.getStars(this.voteAverage)
    }
  }

}
