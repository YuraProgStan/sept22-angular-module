import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/IUser";
import {urls} from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this
      .http
      .get<IUser[]>(urls.posts)
  }

  getById(id: number): Observable<IUser> {
    return this
      .http
      .get<any>(urls.posts + '/' + id)
  }
}
