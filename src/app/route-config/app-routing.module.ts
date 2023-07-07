import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { DestinationDetailComponent } from '../destination-detail/destination-detail.component';
import { AuthGuard } from './auth.guard';
import { DataResolver } from './data.resolver';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destination/:id', component: DestinationDetailComponent },
  { path: 'destination/:id', loadChildren: () => import('../destination-detail/destination-detail.module').then(m => m.DestinationDetailModule) },
  { path: 'reviews', component: ReviewsComponent, outlet: 'reviews' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'destination/:id', component: DestinationDetailComponent, resolve: { data: DataResolver } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
