import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserService} from "./services/user.service";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UsersResolver} from "./services/resolvers/users.resolver";
import {UserResolver} from "./services/resolvers/user.resolver";
import {UserGuard} from "./services/guard/user.guard";


@NgModule({
  declarations: [UsersComponent,UserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers:[UserService, UsersResolver, UserResolver, UserGuard]
})
export class UsersModule {

}
