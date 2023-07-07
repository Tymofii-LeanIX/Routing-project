import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationDetailComponent } from './destination-detail.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DestinationDetailComponent, ReviewsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', component: DestinationDetailComponent, children: [
        { path: 'reviews', component: ReviewsComponent, outlet: 'reviews' },
      ]},
    ])
  ]
})
export class DestinationDetailModule { }
