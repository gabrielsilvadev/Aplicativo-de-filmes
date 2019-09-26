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
  public nome_usuario:string="gabrielkennedy";
  public daata_dia:string="setembro 19, 2019";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public somadoisnumeros():void{
    // alert()
  }

  ionViewDidLoad() {
     //this.somadoisnumeros(445,564);
  }

}
