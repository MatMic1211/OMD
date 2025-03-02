import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface Movie {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  imdbID: string; 
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '1af9e531';

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<Movie[]> {
    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('s', searchTerm);

    return this.http.get<{ Search: { imdbID: string }[] }>(this.apiUrl, { params })
      .pipe(
        switchMap(response => {
          if (!response.Search) return [];
          const movieDetailsRequests = response.Search.map(movie => this.getMovieDetails(movie.imdbID));
          return forkJoin(movieDetailsRequests);
        })
      );
  }

  private getMovieDetails(imdbID: string): Observable<Movie> {
    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('i', imdbID);

    return this.http.get<Movie>(this.apiUrl, { params });
  }
}
