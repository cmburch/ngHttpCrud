import { Component } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any[];

  website = 'https://jsonplaceholder.typicode.com/posts';
  constructor(http: Http) {
    http.get(this.website)
      .subscribe(response => {
        // console.log(response.json());
        this.posts = response.json();
      });
  }


}
