import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Posts } from '../posts.model';
import { PostsService } from '../posts.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css'],
  providers: [PostsService]
})
export class PostsDetailComponent implements OnInit {
  postId: string;
  postToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostbyId(this.postId);
  }

}
