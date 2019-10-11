import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private movieProvider: MovieProvider,public loadingCtrl: LoadingController) {
  }
  public somadoisnumeros():void{
    // alert()
  }
  
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  fechar(){
    this.loader.dismiss();
  }
  
  doRefresh(refresher) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      this.apimovie();
      refresher.complete();
    }, 2000);
  }

  ioniViewDidEnter(){
    this.apimovie();
  }

  apimovie(){
    this.presentLoading();
    this.movieProvider.Movies().subscribe(
      data=>{
        const response = (data as any); 
        const objeto_retorne = JSON.parse(response._body);
        this.lista_filmes = objeto_retorne.results; 
        console.log(objeto_retorne);
        this.fechar();
      }, error=>{
        console.log(error);
      }
    )
  }

}
       
    