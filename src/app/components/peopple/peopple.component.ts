import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Iperson } from '../../models/Iperson';

@Component({
  selector: 'app-peopple',
  templateUrl: './peopple.component.html',
  styleUrl: './peopple.component.css'
})
export class PeoppleComponent implements OnInit{
  persons:Iperson[] = [];
  pages:number[] = [];
  currentPage: number = 1;
  pageItems:number = 10;
  searchTerm:string = '';
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  constructor(private _PersonService:PersonService){}
  ngOnInit(): void {
    this.GetPersons();
  }

GetPersons()
{
  this.pages = new Array(this.pageItems).fill('').map((x,i) => i+1);
  this._PersonService.getTrendingPersons(this.currentPage).subscribe({
    next:(res:any) =>{
      this.persons = res.results;
    },
    error:(error) => {
      console.error("An Error Occured During Fetching the API",error);
    }
  })
};

nextPage() :void
{
  if (this.currentPage < this.pageItems) {
    this.currentPage++;
    this.GetPersons();
  }
}

previousPage() :void
{
  if (this.currentPage > 1) {
    this.currentPage--;
    this.GetPersons();
  }
}

onChangePage(page:number) :void
{
  this.currentPage = page;
  this.GetPersons();
}



}
