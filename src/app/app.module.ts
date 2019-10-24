import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { HttpModule } from '@angular/http';
import { MovieProvider } from '../providers/movie/movie';
import {bancoProvider} from '../providers/config/banco';
import FeedPage from '../pages/feed/feed';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SobrePage } from '../pages/sobre/sobre';
import { PerfilPage } from '../pages/perfil/perfil';
import { DetalhesPage } from '../pages/detalhes/detalhes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    SobrePage,
    PerfilPage,
    DetalhesPage
  ],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents:[ MyApp,
    HomePage, 
    TabsPage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    SobrePage,
    PerfilPage,
    DetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    bancoProvider
  ]
})
export class AppModule {}
