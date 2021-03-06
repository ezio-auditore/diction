import { Component, ViewChild,OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {SpeechService} from '../services/speech.service';
@Component({
  selector: 'app-submit-speech',
  templateUrl: './submit-speech.component.html',
  styleUrls: ['./submit-speech.component.css']
})
export class SubmitSpeechComponent implements OnInit {
successSubmit :boolean=false;
  constructor(private speechService :SpeechService) { }
  ngOnInit() {
  }
submitForm(newSpeech){
  this.speechService.addSpeech(newSpeech);
  newSpeech.reset();
this.successSubmit=true;
setTimeout(() => this.successSubmit = false, 5000);
}
}
