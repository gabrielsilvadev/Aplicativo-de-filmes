import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  [x: string]: any;
  private baseAppi = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  } 
  public page=1;
  Movies(page=1){
    return this.newMethod().http.get(this.baseAppi + '/movie/popular/?page='+{page}+'&api_key=b2c626eb0c619306c69f850886d93e1f'); 
  }
  newMethod(){
    return this;
  }

  Moviedate(filmeid){
    return this.http.get(this.baseAppi + "/movie/${"+filmeid+"}?api_key=b2c626eb0c619306c69f850886d93e1f"); 
  }
}
