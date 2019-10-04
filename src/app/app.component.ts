import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { bancoProvider }from '../providers/config/banco';
import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
   providers:[
   bancoProvider
]
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    bancoProvider: bancoProvider) {
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    let config = bancoProvider.getConfiData();
    if(config==null){
      this.rootPage=IntroPage;  
      bancoProvider.setConfiDate(false);
    }else{
       this.rootPage=TabsPage;
    }
    
    console.log(config);
    });
  }
}
