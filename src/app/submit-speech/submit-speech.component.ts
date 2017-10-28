import { Component, ViewChild,OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {SpeechService} from '../services/speech.service';
@Component({
  selector: 'app-submit-speech',
  templateUrl: './submit-speech.component.html',
  styleUrls: ['./submit-speech.component.css']
})
export class SubmitSpeechComponent implements OnInit {

  constructor(private speechService :SpeechService) { }
  ngOnInit() {
  }
submitForm(newSpeech){
  this.speechService.addSpeech(newSpeech);
}
}
