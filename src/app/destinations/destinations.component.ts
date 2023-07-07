import { Component } from '@angular/core';
import { Destination } from '../shared/destination.interface';

@Component({
  selector: 'app-destinations',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let destination of destinations">
        <a matLine [routerLink]="['/destination/', destination.id]">{{destination.name}}</a>
      </mat-list-item>
    </mat-list>
  `
})
export class DestinationsComponent {
  destinations: Destination[] = [
    { id: 1, name: 'Tokio'},
    { id: 2, name: 'Hong Kong'},
    { id: 3, name: 'Paris'},
    { id: 4, name: 'Seoul'},
  ]
}
