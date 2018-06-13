import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts.model';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [PostsService]
})
export class BoardComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private postService: PostsService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Posts){
    this.router.navigate(['posts', clickedPost.$key]);
  }
}
