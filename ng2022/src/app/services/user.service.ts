import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {IUser} from '../models';
import {urls} from '../constants'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this
      .httpClient
      .get<IUser[]>(urls.users)
  }

  getById(id: number): Observable<IUser> {
    return this
      .httpClient
      .get<IUser>(urls.users + '/' + id)
  }
}
