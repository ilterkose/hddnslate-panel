import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { DeletetwtComponent } from './tweet-list/delete-twt.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TwitterPageComponent } from './twitter-page/twitter-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeletetwtComponent,
    WelcomePageComponent,
    TwitterPageComponent,
    TweetListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeletetwtComponent]
})
export class AppModule { }
