import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../models/IUser';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  users: IUser[];

  @Output()
  userEmitt = new EventEmitter<IUser>()

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  catchUserEmitt(userCatch: IUser): void {
    console.log('users', userCatch);
    this.userEmitt.emit(userCatch);
  }

}
