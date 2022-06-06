import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IGenres} from "../interfaces/genres-list.interface";
import {apiKey, urls} from "../../../constants/urls";
import {HttpClient} from "@angular/common/http";
import {IMoviesList} from "../../movies-list/interfaces/movies-list.interface";

@Injectable({
  providedIn: 'root'
})
export class GenresListService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IGenres> {
    return this.http.get<IGenres>(`${urls.genresList}?api_key=${apiKey}`);
  }
}
