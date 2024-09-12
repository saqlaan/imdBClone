import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY } from '../../constants/api';
import {
  GetMoviesResponseType,
  MovieDetailsType,
  MovieType,
} from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiURL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

  constructor(private http: HttpClient) {}

  getMovies(text: string): Observable<GetMoviesResponseType> {
    return this.http.get(`${this.apiURL}s=${text}`);
  }

  getMovie(movieId: string): Observable<MovieDetailsType> {
    return this.http.get(
      `${this.apiURL}i=${movieId}`
    ) as Observable<MovieDetailsType>;
  }
}
