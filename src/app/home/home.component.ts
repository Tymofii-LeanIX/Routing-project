import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Welcome to RouteMaster!</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Discover your next adventure. Explore destinations, read reviews and plan your journey.</p>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-button color="primary" routerLink="/destinations">Discover Destinations</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      padding: 16px;
    }

    mat-card {
      max-width: 600px;
      margin: 16px;
    }
  `]
})
export class HomeComponent { }
