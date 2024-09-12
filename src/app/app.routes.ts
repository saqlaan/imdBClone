import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WatchlistPageComponent } from './pages/watchlist-page/watchlist-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistPageComponent,
  },
  {
    path: 'movie/:id',
    component: MoviePageComponent,
  },
  { path: '**', component: HomePageComponent },
];
