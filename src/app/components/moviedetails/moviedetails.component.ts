import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { ImovieDetails } from '../../models/Imovie';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {
  movieDetails:ImovieDetails = {
    id:0,
    name:'',
    poster_path:'',
    original_title:'',
    vote_average:0,
    release_date:'',
    vote_count:0,
    revenue:'',
    overview:''
   }
  moviedetailsId : string = '';
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MovieService:MovieService, private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.moviedetailsId = this._ActivatedRoute.snapshot.params['id'];
    this._MovieService.getModelDetails(this.moviedetailsId).subscribe({
      next: (res :any) =>
      {
        this.movieDetails = res;
      }
    })
  }

  }


