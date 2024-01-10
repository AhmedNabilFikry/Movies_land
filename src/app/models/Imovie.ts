import { BaseModel } from "./BaseModel";

export interface Imovie extends BaseModel {
  title:string,
  overview:string,
  vote_average:number
 }

 export interface ImovieDetails extends BaseModel{
  original_title:string,
  vote_average:number,
  release_date:string,
  vote_count:number,
  revenue:string,
  overview:string
 }

