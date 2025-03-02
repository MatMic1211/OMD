import { Component, Input } from '@angular/core';

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
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

  @Input() movies: Movie[] = [];
  sortColumn: string = 'Title';
  sortOrder: boolean = true;

  sortData(column: string): void {
    this.sortOrder = this.sortColumn === column ? !this.sortOrder : true;
    this.sortColumn = column;

    this.movies = this.movies.sort((a, b) => {
      if (a[column as keyof Movie] > b[column as keyof Movie]) {
        return this.sortOrder ? 1 : -1;
      } else if (a[column as keyof Movie] < b[column as keyof Movie]) {
        return this.sortOrder ? -1 : 1;
      }
      return 0;
    });
  }

}
