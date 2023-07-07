import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Profile</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Welcome to your profile!</p>
      </mat-card-content>
    </mat-card>
  `
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
