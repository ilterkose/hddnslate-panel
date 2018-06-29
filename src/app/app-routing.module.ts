import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {TwitterPageComponent} from "./twitter-page/twitter-page.component";
import {TweetListComponent} from "./tweet-list/tweet-list.component";

const routes : Routes = [
  { path : 'welcome', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'twitter', component: TwitterPageComponent },
  { path: 'twitter-list', component: TweetListComponent}

];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

