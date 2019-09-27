import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers :[
    MovieProvider
  ]
})
export default class FeedPage {
  public  objeto_feed ={ 
    titulo:"gabrielkennedyy",
    data:"setembro 19, 2019",
    descricao:"Estou criando um App",
    like: 12,
    comente:4,
    hora_coment: "11h ago"
  }
  public lista_filmes = new  Array<any>();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private movieProvider: MovieProvider) {
  }
  public somadoisnumeros():void{
    // alert()
  }

  ionViewDidLoad() {
    this.movieProvider.Movies().subscribe(
      data=>{
        const response = (data as any); 
        const objeto_retorne = JSON.parse(response._body);
        this.lista_filmes = objeto_retorne.results; 
        console.log(objeto_retorne);
      }, error=>{
        console.log(error);
      }
    )
  }

}
