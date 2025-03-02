import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Movie {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
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

    return this.http.get<{ Search: Movie[] }>(this.apiUrl, { params })
      .pipe(
        map(response => response.Search || [])
      );
  }
}
