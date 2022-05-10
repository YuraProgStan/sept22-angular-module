import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  users: IUser[];


  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(response => this.users = response)
  }

  ngOnInit(): void {
    this.getUsers()
  }
}
