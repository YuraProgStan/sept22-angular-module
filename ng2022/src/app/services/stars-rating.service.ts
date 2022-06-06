import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarsRatingService {

  constructor() { }

  getStars(vote_average: number){
    const voteStar = Math.round(Math.floor(vote_average)/2)
    const arrVoteStar = [];
    for (let i = 0; i < voteStar; i++) {
      arrVoteStar.push(i);
    }
    const arrNotCheckStar = [];
    for (let j = 0; j < 5-voteStar; j++) {
      arrNotCheckStar.push(j);
    }
    return {arrVoteStar,arrNotCheckStar}
  }
}
