import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {
  public  objeto_feed ={
    titulo:"gabrielkennedyy",
    data:"setembro 19, 2019",
    descricao:"Estou criando um App",
    like: 12,
    comente:4,
    hora_coment: "11h ago"
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public somadoisnumeros():void{
    // alert()
  }

  ionViewDidLoad() {
     //this.somadoisnumeros(445,564);
  }

}
