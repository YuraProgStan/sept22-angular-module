import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../../models/";
import {urls} from '../../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this
      .http
      .get<IUser[]>(urls.users)
  }

  getById(id: number): Observable<IUser> {
    return this
      .http
      .get<any>(urls.users + '/' + id)
  }
}
