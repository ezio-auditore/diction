import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewSpeechComponent } from './view-speech/view-speech.component';
import { SubmitSpeechComponent } from './submit-speech/submit-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewSpeechComponent,
    SubmitSpeechComponent,
    SearchSpeechComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
