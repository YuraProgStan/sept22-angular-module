import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IComment} from "../../../../models";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {
  constructor(private commentService:CommentService) {
  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IComment | Observable<IComment> | Promise<IComment> {
       const {id} = route.params
        return this.commentService.getById(id)
    }

}
