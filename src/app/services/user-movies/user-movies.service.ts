import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieType } from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class UserMoviesService {
  private readonly STORAGE_KEY = 'bookmarkMovies';
  private bookmarkMovies: MovieType[] = this.loadFromLocalStorage() || [];
  private bookmarkMoviesSubject = new BehaviorSubject(this.bookmarkMovies);
  constructor() {}

  getBookmarkMovies = (): Observable<MovieType[]> => {
    return this.bookmarkMoviesSubject.asObservable();
  };

  addMovieBookmark = (movie: MovieType) => {
    this.bookmarkMovies.push(movie);
    this.updateLocalStorage();
    this.bookmarkMoviesSubject.next(this.bookmarkMovies);
  };

  removeBookMark = (movieId: string) => {
    this.bookmarkMovies = this.bookmarkMovies.filter(
      (movie) => movie.imdbID !== movieId
    );
    this.updateLocalStorage();
    this.bookmarkMoviesSubject.next(this.bookmarkMovies);
  };

  isBookmarked = (movieId: string) => {
    return (
      this.bookmarkMovies.findIndex((movie) => movie.imdbID === movieId) > -1
    );
  };

  private updateLocalStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.bookmarkMovies));
  }

  private loadFromLocalStorage(): MovieType[] | null {
    const savedMovies = localStorage.getItem(this.STORAGE_KEY);
    return savedMovies ? JSON.parse(savedMovies) : null;
  }
}
