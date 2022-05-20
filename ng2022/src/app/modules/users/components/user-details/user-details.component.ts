import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../../../models";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user: IUser
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id})=>{
    //     this.userService.getById(id).subscribe(value => this.user = value);
    // })
    this.activatedRoute.data.subscribe(({userData}) => this.user = userData)
  }

}
