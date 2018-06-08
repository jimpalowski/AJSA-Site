import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: Post[] = [
    new Post('New Post', 'ANgry Joe')
  ];
  @Input() childPost: Post[];
  @Output() clickSender = new EventEmitter();
}
