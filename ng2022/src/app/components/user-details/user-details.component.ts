import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Navigation} from "@angular/router";
import {UserService} from "../../services";
import {IUserDetailsObj} from "../../models/userDetails.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: IUserDetailsObj

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let{state:{data}} = history;
     this.userDetailsObj = data as IUserDetailsObj;
    })
  }
}
