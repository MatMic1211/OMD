import { Component } from '@angular/core';

interface Movie {
  title: string;
  description: string;
  year: number;
  author: string;
  category: string;
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  movies: Movie[] = [
    { title: 'Inception', description: 'A mind-bending thriller', year: 2010, author: 'Christopher Nolan', category: 'Sci-Fi' },
    { title: 'Interstellar', description: 'Space exploration movie', year: 2014, author: 'Christopher Nolan', category: 'Sci-Fi' },
    { title: 'The Dark Knight', description: 'Superhero action movie', year: 2008, author: 'Christopher Nolan', category: 'Action' },
    { title: 'Titanic', description: 'A love story on the ship', year: 1997, author: 'James Cameron', category: 'Drama' },

  ];

  filterTerm: string = '';

  get filteredMovies(): Movie[] {
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      movie.description.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      movie.year.toString().includes(this.filterTerm) ||
      movie.author.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      movie.category.toLowerCase().includes(this.filterTerm.toLowerCase())
    );
  }
}
