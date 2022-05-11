import {Component, Input, OnInit} from '@angular/core';
import { IComment } from 'src/app/models/IComment';
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comments: IComment[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => this.comments = value)
  }

}
