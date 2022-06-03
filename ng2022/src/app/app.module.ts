import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from './services/user.service';
import { СustomPipe } from './services/pipes/сustom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    СustomPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
