import {Injectable} from '@angular/core';
import {BehaviorSubject, findIndex, Observable} from "rxjs";
import {IGenres} from "../modules/genres-list/interfaces/genres-list.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private storage = new BehaviorSubject<any>({
    genres: {id: 0, name: ''},
    movies: {moviesList: "", movieDetails: "", pages: 1, genres: ""},
    theme: "light",
  })

  public storage$ = this.storage.asObservable();

  public updatePage(page: number) {
    const currentValue = this.storage.value;
    const updatedValue = {...currentValue, movies: {...currentValue.movies, pages: page}};
    this.storage.next(updatedValue);
  }

  public updateGenresMovies(genreId: string) {
    const currentValue = this.storage.value;
    const updatedValue = {...currentValue, movies: {...currentValue.movies, genres: genreId}};
    this.storage.next(updatedValue);
  }

  public setGenres(genres: IGenres) {
    const currentValue = this.storage.value;
    const setValue = {...currentValue, genres: genres.genres};
    this.storage.next(setValue);
  }

  public getGenresNameFromState(genresArrId: Array<number>) {
    const currentValue = this.storage.value;
    let genresNames:Array<string> = [];
    if (currentValue.genres) {
      genresArrId.forEach(item => {
        // @ts-ignore
        const genresName = currentValue.genres.find(value => value.id === +item);
        genresNames.push(genresName.name);
      })
    }
    return genresNames
  }

  public setTheme(themeNew:string){
    const currentValue = this.storage.value;
    const setValue = {...currentValue, theme: themeNew};
    this.storage.next(setValue);
  }

  public getIndexGenre(genreId:number){
    const currentValue = this.storage.value;
    let findIndex
    if(currentValue.genres){
      // @ts-ignore
     findIndex = currentValue.genres.findIndex(value => value.id === +genreId)

    }

   return findIndex
  }

  constructor() {
  }
}
