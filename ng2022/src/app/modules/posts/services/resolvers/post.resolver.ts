import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IPost} from "../../../../models";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {
  constructor(private postService: PostService) {
  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPost | Observable<IPost> | Promise<IPost> {
        const {id} = route.params;
      return this.postService.getById(id);
    }

}
