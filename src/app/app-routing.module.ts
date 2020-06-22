import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
