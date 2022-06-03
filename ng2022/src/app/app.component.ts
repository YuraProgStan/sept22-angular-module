import {Component} from '@angular/core';
import {IUser} from "./models/IUser";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: IUser

  catch(user: IUser) {
    console.log('app', user);
    this.user = user;
  }
}
