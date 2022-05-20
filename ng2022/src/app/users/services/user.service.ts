import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IUser} from "../interfaces/IUser";
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this
      .http
      .get<IUser[]>(this._url)
      .pipe(
        map(value => value),
        catchError((err) =>throwError('dasfaf'))
      );
  }

  getUser(id: string): Observable<IUser> {
    return this
      .http
      .get<IUser>(this._url + '/' + id)
  }
}
