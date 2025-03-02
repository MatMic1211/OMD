import { Component } from '@angular/core';
import { MovieService } from '../Service/movie.service';
import { HttpErrorResponse } from '@angular/common/http'; 

interface Movie {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  movies: Movie[] = [];
  filterTerm: string = '';
  isLoading: boolean = false;

  constructor(private movieService: MovieService) { }

  onSearch(): void {
    this.isLoading = true;
    this.movieService.searchMovies(this.filterTerm).subscribe(  
      (movies: Movie[]) => {
        this.movies = movies;
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}
