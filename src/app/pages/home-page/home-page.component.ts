import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MovieType } from '../../types/types';
import { MoviesService } from '../../services/movies/movies.service';
import { MovieTileComponent } from '../../components/movie-tile/movie-tile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, MovieTileComponent],
})
export class HomePageComponent implements OnInit {
  searchForm = new FormGroup({
    inputText: new FormControl('', Validators.required),
  });

  searchResults: MovieType[] = [];
  moviesFound: Boolean | undefined = undefined;
  isLoading: Boolean = false;

  constructor(private movieService: MoviesService, private router: Router) {}

  ngOnInit() {}

  handleSubmit() {
    if (!this.searchForm.valid) return;
    this.searchResults = [];
    this.moviesFound = undefined;
    this.isLoading = true;
    this.movieService
      .getMovies(this.searchForm.value.inputText as string)
      .subscribe((movies) => {
        if (movies?.totalResults) {
          this.searchResults = movies.Search || [];
          this.moviesFound = true;
        }
        if (movies.Response === 'False') {
          this.moviesFound = false;
        }
        this.isLoading = false;
      });
    this.searchForm.reset();
  }
  handleOnClickMovie(id: string) {
    this.router.navigate(['movie', id]);
  }
}
