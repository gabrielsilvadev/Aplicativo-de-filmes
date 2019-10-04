
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let config_key_nome="config";
@Injectable()
export class bancoProvider {
 private config = {
    showSlide:false,
    name:"",
    username:""
 }
            
  constructor(){
  }
  
  getConfiData(): any{
   return localStorage.getItem(config_key_nome) ;
   

 }
  setConfiDate(showSlide?:boolean,name?:string,username?:string): any{
    let config = {
        showSlide:false,
        name:"",
        username:""
          };
    if(showSlide){
      config.showSlide=showSlide;

    }
    if(name){
      config.name=name;

    }
    if(username){
      config.username=username;

    }
    localStorage.setItem(config_key_nome, JSON.stringify(config));
  }
}