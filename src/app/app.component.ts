import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentPost: string = 'Angry Show'
  masterPost: Post[] = [
    new Post('Blog', 'Checkout my new angry review'),
  ];

  addPost(){

  }
}
