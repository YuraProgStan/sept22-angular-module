import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {apiKey, imageURL, urls} from "../../../constants/urls";
import {IMoviesList} from "../interfaces/movies-list.interface";
import {IMovieDetails} from "../interfaces/movie-details.interface";

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  genreNames = [];
  constructor(private http: HttpClient) { }

  getAllMovies(page: number): Observable<IMoviesList> {
    return this.http.get<IMoviesList>(`${urls.moviesList}/?api_key=${apiKey}&page=${page}`)
  }
  getAllByGenrePage(page: number, withGenres: string): Observable<IMoviesList>{
    return this.http.get<IMoviesList>(`${urls.moviesList}?api_key=${apiKey}&page=${page}&with_genres=${withGenres}`)
  }

  getImage(widthImage: string, urlImage: string){
    return `${imageURL}${widthImage}${urlImage}?api_key=${apiKey}`
  }

  getById(id: number): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${urls.movie}/${id}?api_key=${apiKey}`)
  }





}
