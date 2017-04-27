import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionPage } from '../pages/question/question';
import { HistoryPage } from '../pages/history/history';
import { ResultsPage } from '../pages/results/results';

import { Landing } from '../pages/landing/landing';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';

import { AppUser } from '../providers/app-user';
import { Questions } from '../providers/questions';
import { TestResults } from '../providers/test-results';

import { HttpModule } from '@angular/http'

let injections: any[] = [
    MyApp,
    LobbyPage,
    QuestionPage,
    HistoryPage,
    ResultsPage,
    Landing,
    Register,
    Login
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUser, Questions, TestResults
  ]
})
export class AppModule {}
