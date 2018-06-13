import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';
import { BoardComponent } from './board/board.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostsComponent,
    BoardComponent,
    PostsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
