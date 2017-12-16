import { Component } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    this.http.get(this.url)
      .subscribe(response => {
        // console.log(response.json());
        this.posts = response.json();
      });
  }
  createPost(input: HTMLInputElement) {
    const post = {title : input.value};
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      });
  }


}
