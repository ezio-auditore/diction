import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {Ng2Webstorage} from 'ng2-webstorage';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewSpeechComponent } from './view-speech/view-speech.component';
import { SubmitSpeechComponent } from './submit-speech/submit-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';
import {SpeechService} from './services/speech.service';

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
    FormsModule,
    Ng2Webstorage.forRoot({ prefix: 'diction'}) ,
    NgbModule.forRoot()
  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
