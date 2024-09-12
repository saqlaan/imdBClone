import { Component, Input, OnInit } from '@angular/core';
import { MovieType } from '../../types/types';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css'],
  standalone: true,
})
export class MovieTileComponent implements OnInit {
  @Input() movie: MovieType = {} as MovieType;
  constructor() {}

  ngOnInit() {}
}
