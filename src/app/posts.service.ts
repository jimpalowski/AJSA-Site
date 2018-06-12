import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PostsService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.posts = database.list('posts');
  }
}
