import { Router } from '@angular/router';
import { Imovie } from '../../models/Imovie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: Imovie[] = [];
  currentPage = 1;
  pageItems = 10;
  imgPrefix = "https://image.tmdb.org/t/p/w500";
  pages: number[] = [];
  term:string = '';
  showButton:boolean = false;
  constructor(private _MovieService: MovieService , private _Router:Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.pages = new Array(this.pageItems).fill('').map((_, i) => i + 1);
    this._MovieService.getMoviesByPagination(this.currentPage).subscribe({
      next: (res: any) => {
        this.movies = res.results;
      }
    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getMovies();
    }
  }

  nextPage() {
    if (this.currentPage < this.pageItems) {
      this.currentPage++;
      this.getMovies();
    }
  }

  onChangePage(pageNumber:number) :void
  {
    this.currentPage = pageNumber;
    this._MovieService.getMoviesByPagination(pageNumber).subscribe({
      next:(res:any) => this.movies = res.results
    })
  }
  navigateToDetails(movieId:number)
  {
    this._Router.navigate(['/moviedetails', movieId])
  }

  toggleButton(show:boolean) :void{
    this.showButton = true;
  }

}
