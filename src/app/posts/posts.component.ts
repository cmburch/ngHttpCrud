import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        // console.log(response.json());
        this.posts = response.json();
    });
  }
  createPost(input: HTMLInputElement) {
    const post: any = {title : input.value};
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.unshift(post);
        console.log(response.json());
      });
  }
  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }
  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
