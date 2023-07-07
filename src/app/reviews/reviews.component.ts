import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Reviews</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>These are the reviews for destination with id {{ id }}</p>
      </mat-card-content>
    </mat-card>
  `
})
export class ReviewsComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.parent!.params['id'];
  }
}
