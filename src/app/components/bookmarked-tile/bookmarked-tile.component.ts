import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { MovieType } from '../../types/types';
import { Router } from '@angular/router';
import { UserMoviesService } from '../../services/user-movies/user-movies.service';

@Component({
  selector: 'app-bookmarked-tile',
  templateUrl: './bookmarked-tile.component.html',
  styleUrls: ['./bookmarked-tile.component.css'],
  standalone: true,
})
export class BookmarkedTileComponent implements OnInit {
  @Input() movie: MovieType = {} as MovieType;
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private userMovieService: UserMoviesService
  ) {}

  ngOnInit() {}

  handleOnClickMovie() {
    this.router.navigate(['movie', this.movie.imdbID]);
  }

  handleOnClickRemoveBookmark() {
    this.userMovieService.removeBookMark(this.movie.imdbID);
  }
}
