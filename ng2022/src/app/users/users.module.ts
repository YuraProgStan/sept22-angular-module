import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {UserComponent} from "./components/user/user.component";
import {UsersComponent} from "./components/users/users.component";
import {UsersResolver} from "./services/resolvers/users.resolver";
import {UserResolver} from "./services/resolvers/user.resolver";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserGuard} from "./services/guards/user.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers:[UserService, UsersResolver, UserResolver, UserGuard]
})
export class UsersModule {}
