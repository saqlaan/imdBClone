import { Component, OnInit } from '@angular/core';
import { UserMoviesService } from '../../services/user-movies/user-movies.service';
import { MovieType } from '../../types/types';
import { BookmarkedTileComponent } from '../../components/bookmarked-tile/bookmarked-tile.component';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  standalone: true,
  imports: [BookmarkedTileComponent],
})
export class WatchlistPageComponent implements OnInit {
  bookmarkMovies: MovieType[] = [];
  constructor(private userMoviesService: UserMoviesService) {}

  ngOnInit() {
    this.userMoviesService.getBookmarkMovies().subscribe((movies) => {
      this.bookmarkMovies = movies;
    });
  }
}
