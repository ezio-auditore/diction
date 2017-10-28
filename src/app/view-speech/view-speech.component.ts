import { Component, OnInit } from '@angular/core';
import {SpeechService} from '../services/speech.service';
@Component({
  selector: 'app-view-speech',
  templateUrl: './view-speech.component.html',
  styleUrls: ['./view-speech.component.css']
})
export class ViewSpeechComponent implements OnInit {
public speeches :any=[];
public selectedSpeech :any;
public isEditing :boolean = false;
public speech :any;
  constructor(private speechService :SpeechService) { }

  ngOnInit() {
    this.speeches = this.speechService.getSpeeches();
    console.log(this.speeches);
    this.selectedSpeech = this.speeches[0];
  }
selectSpeech(speech){
  this.selectedSpeech = speech;
}

deleteSelectedSpeech(){
  console.log(this.selectedSpeech);
  this.speechService.deleteSpeech(this.selectedSpeech);
  if(this.speeches.indexOf(this.selectedSpeech)>-1)
    this.speeches.splice(this.speeches.indexOf(this.selectedSpeech),1);

}
editSelectedSpeech(){
  this.isEditing=true;
}
saveSelectedSpeech(speech){
  console.log(speech);
  let updatedSpeech = this.selectedSpeech;
  updatedSpeech.text=speech.value;
  this.speechService.updateSpeech(this.selectedSpeech,updatedSpeech);
  this.isEditing=false;
  speech.value=this.selectedSpeech.text;

}
}
