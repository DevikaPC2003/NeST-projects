import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Apiservices } from '../apiservices';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  posts: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private apiservices: Apiservices) { }               //to call apiservies in constructor
  ngOnInit() {
    this.apiservices.getlist().subscribe({
      next: (data: any) => {
        console.log('Posts data loaded:', data);
        this.posts = data.posts || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading posts data:', err);
        this.errorMessage = 'Failed to load data. Please try again.';
        this.isLoading = false;
      }
    });

  }
}
