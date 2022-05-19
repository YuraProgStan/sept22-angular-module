import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {path: '', component: UsersComponent,
    // children:[
    //   // {path: 'id', component: }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }