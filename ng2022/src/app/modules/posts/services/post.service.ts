import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPost} from "../../../models";
import {urls} from '../../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this
      .http
      .get<IPost[]>(urls.posts)
  }

  getById(id: number): Observable<IPost> {
    return this
      .http
      .get<any>(urls.posts + '/' + id)
  }
}
