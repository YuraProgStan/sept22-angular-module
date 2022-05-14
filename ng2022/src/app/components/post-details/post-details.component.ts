import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { IPost } from 'src/app/models';
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
postDetailsObj : IPost

  constructor(private activetedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
   this.activetedRoute.params.subscribe(({id}) =>{
     this.postService.getById(id).subscribe(value => this.postDetailsObj = value)
    })
  }

}
