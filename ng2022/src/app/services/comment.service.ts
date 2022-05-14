import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IComment} from '../models';
import {urls} from  '../constants'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this
      .httpClient
      .get<IComment[]>(urls.comments)
  }

  getById(id: number): Observable<IComment> {
    return this
      .httpClient
      .get<IComment>(urls.comments + '/' + id)
  }
}
