import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
@Injectable()
export class SpeechService {

  constructor(private localStore :LocalStorageService) { }
public speeches :any=[];
  addSpeech(newSpeech){
    this.speeches=this.localStore.retrieve('speeches');
    if(this.speeches==null){
      this.speeches = [];
    }
    this.speeches.push(newSpeech.value);
    this.localStore.store('speeches',this.speeches);
  }
getSpeeches(){
  this.speeches=this.localStore.retrieve('speeches');
  if(this.speeches==null){
    this.speeches = [];
  }
  return this.speeches;
}

deleteSpeech(speech){
  console.log(speech);
  this.speeches=this.localStore.retrieve('speeches');

  if(this.speeches.indexOf(speech)>-1)
    {this.speeches.splice(this.speeches.indexOf(speech),1);}
  this.localStore.store('speeches',this.speeches);
}
updateSpeech(speech,updatedSpeech){
  this.speeches=this.localStore.retrieve('speeches');

  this.speeches[this.speeches.indexOf(speech)]= updatedSpeech;

  this.localStore.store('speeches',this.speeches);
}
}
