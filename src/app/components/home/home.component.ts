import { Console } from 'console';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  trendingMovies:any[] = [];
  trendingTvShows:any[] = [];
  trendingPersons:any[] = [];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  constructor(private _MovieService:MovieService){}
  ngOnInit(): void {
    this.LoadModel();
  }

LoadModel()
{
  this._MovieService.getModel('movie').subscribe({
    next:(response) => this.trendingMovies = response.results.slice(0,10)
  })
  this._MovieService.getModel('person').subscribe({
    next:(response)=>
    {
      console.log(response)
      this.trendingPersons = response.results.slice(0,10)
    }
  })
  this._MovieService.getModel('tv').subscribe({
    next:(response) =>
    {
      console.log(response)
      this.trendingTvShows = response.results.slice(0,10)
    }
    })
}

}
