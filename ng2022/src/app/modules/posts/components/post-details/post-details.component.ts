import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../../../models";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute:ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{
      this.postService.getById(id).subscribe(value => this.post = value);
    })
  }

}
