import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserService} from "./services/user.service";
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [UsersComponent,UserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers:[UserService]
})
export class UsersModule {

}
