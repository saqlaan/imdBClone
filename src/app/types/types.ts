export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type MovieDetailsType = MovieType & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type API_BASE_RESPONSE = {
  Error?: string;
  Response?: string;
};

export type GetMoviesResponseType = API_BASE_RESPONSE & {
  Search?: MovieType[];
  totalResults?: string;
};
