import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  constructor(private authServie: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.authServie.isAuthorization()){
      this.router.navigate(['cars']);
    }
  }
}
