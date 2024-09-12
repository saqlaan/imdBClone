import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies/movies.service';
import { MovieDetailsType } from '../../types/types';
import { DetailRowComponent } from '../../components/detail-row/detail-row.component';
import { UserMoviesService } from '../../services/user-movies/user-movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  standalone: true,
  imports: [DetailRowComponent],
})
export class MoviePageComponent implements OnInit {
  movieId = '';
  movie: MovieDetailsType | null = null;
  detailsNotFound = false;
  isBookMarked = false;
  constructor(
    private activedRouter: ActivatedRoute,
    private movieService: MoviesService,
    private userMovieService: UserMoviesService,
    private router: Router
  ) {
    this.activedRouter.params.subscribe((params) => {
      const movieId = params['id'];
      if (movieId == null || movieId == undefined) {
        this.router.navigate(['/']);
        return;
      }
      this.movieId = movieId;
    });
  }
  ngOnInit() {
    this.movieService.getMovie(this.movieId).subscribe((movieDetails) => {
      if (movieDetails.Response === 'False') {
        this.detailsNotFound = true;
        this.router.navigate(['/']);
      } else {
        this.movie = movieDetails;
      }
    });
    this.isBookMarked = this.userMovieService.isBookmarked(this.movieId);
  }

  handleOnClickBookmark() {
    const { Title, Poster, Year, Type, imdbID } = this
      .movie as MovieDetailsType;
    if (this.isBookMarked) {
      this.userMovieService.removeBookMark(imdbID);
    } else {
      this.userMovieService.addMovieBookmark({
        Title,
        Poster,
        Year,
        Type,
        imdbID,
      });
    }
    this.isBookMarked = !this.isBookMarked;
  }
}
