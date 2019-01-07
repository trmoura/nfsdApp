import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RelatorioIssGeralProvider } from "../providers/relatorio-iss-geral/RelatorioIssGeralProvider";
import { MyApp } from './app.component';
import { TotalissPageModule } from '../pages/totaliss/totaliss.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';
import { LoginPageModule } from '../pages/login/login.module';
import { HomePageModule } from '../pages/home/home.module';
import { LoginProvider } from '../providers/login/login.provider';

import { IonicSelectableModule } from 'ionic-selectable';
import { GlobalProvider } from '../providers/global/global';





registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    MyApp,
    TabsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TotalissPageModule,
    LoginPageModule,
    HomePageModule,
    IonicSelectableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RelatorioIssGeralProvider,
    LoginProvider,
    GlobalProvider
  ]
})



export class AppModule { }
