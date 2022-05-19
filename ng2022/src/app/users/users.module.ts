import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from "../components/users/users.component";
import {UserComponent} from "../components/user/user.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [UsersComponent,UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
