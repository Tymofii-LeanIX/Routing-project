import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination-detail',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Destination Detail</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Id is {{ id }}</p>
      </mat-card-content>
    </mat-card>
    <a [routerLink]="[{ outlets: { reviews: ['reviews'] } }]">See Reviews</a>
    <router-outlet name="reviews"></router-outlet>
  `
})
export class DestinationDetailComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}
