import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, InfiniteScrollContent, InfiniteScroll } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';
import { PerfilPage } from '../perfil/perfil';

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
  
  public lista_filmes = new Array<any>(); 
  public loader; 
  public refresher;
  public isRefreshing: boolean = false;
  public scroll;
  public page=1;
  public infiniteScroll;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private movieProvider: MovieProvider,public loadingCtrl: LoadingController) {
  }
   
  ionViewDidEnter(){
    this.apimovie();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...", 
    }); 
    this.loader.present();
  }

  doInfinite(infiniteScroll){
    this.page++;   
    this.infiniteScroll = infiniteScroll;
    this.apimovie(true);
  }

  fechar(){
    this.loader.dismiss();
  }

  abrir(filmes){ 
    this.navCtrl.push(DetalhesPage,{id:filmes});
  }
  
  goTo(){
    this.navCtrl.push(PerfilPage)
  }

  doRefresh(refresher) {
    console.log('Begin async operation');
    setTimeout(() => { 
      console.log('Async operation has ended');
      this.apimovie();
      refresher.complete();
    }, 2000);
  }
  
  apimovie(newpage: boolean=false){
    this.presentLoading();
    this.movieProvider.Movies(this.page).subscribe(
      data=>{
        const response = (data as any); 
        const objeto_retorne = JSON.parse(response._body);
        if(newpage){
         this.lista_filmes = this.lista_filmes.concat(objeto_retorne.results);  
         this.infiniteScroll.complete();         
        } else {
          this.lista_filmes = objeto_retorne.results;
        }
        this.lista_filmes = objeto_retorne.results;
        console.log(objeto_retorne);
        this.fechar();
      }, error=>{
        console.log('api erro', error);
      }
    )
  }

}
       
    