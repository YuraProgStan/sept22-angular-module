import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IComment} from "../../../models";
import {urls} from '../../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this
      .http
      .get<IComment[]>(urls.comments)
  }

  getById(id: number): Observable<IComment> {
    return this
      .http
      .get<any>(urls.comments + '/' + id)
  }
}
