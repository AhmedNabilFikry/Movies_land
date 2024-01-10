import { Itv } from '../../models/Itv';
import { TvService } from './../../services/Tv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {
constructor(private _TvService:TvService){}
ngOnInit(): void {
  this.getTvShows();
}
tvShows:Itv[] = [];
currentPage:number = 1;
pageItems:number = 10;
pages:number[] = [];
term:string = '';
imgPrefix:string = "https://image.tmdb.org/t/p/w500";
getTvShows() :void
{
  this._TvService.getTodayTVShows(this.currentPage).subscribe({
    next: (res:any) => {
      this.pages = new Array(this.pageItems).fill('').map((x,i) => i+1);
      this.tvShows = res.results;
    }
  });
}

onChangePage(page: number): void {
  this.currentPage= page;
  this.getTvShows();
  }

  nextPage()
  {
    if (this.currentPage < this.pageItems) {
      this.currentPage++;
      this.getTvShows();
    }
  }

    previousPage()
    {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getTvShows();
      }
    }





}
