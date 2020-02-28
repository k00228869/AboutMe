import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path: 'MyInfo',component: MyInfoComponent},
  {path: 'Movies',component: MoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
