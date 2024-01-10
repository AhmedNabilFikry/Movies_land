import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { PeoppleComponent } from './components/peopple/peopple.component';
import { LoignComponent } from './components/loign/loign.component';
import { RegisterComponent } from './components/register/register.component';
import { NtFoundComponent } from './components/nt-found/nt-found.component';
import { authenticationGuard } from './Guards/Authentication.guard';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movies', component:MoviesComponent},
  {path:'tv',canActivate:[authenticationGuard], component:TvComponent},
  {path:'people',canActivate:[authenticationGuard], component:PeoppleComponent},
  {path:'login',component:LoignComponent},
  {path:'register',component:RegisterComponent},
  {path:'moviedetails/:id',component:MoviedetailsComponent},
  {path:'**',component:NtFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
