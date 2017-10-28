import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {SpeechService} from '../services/speech.service';
@Component({
  selector: 'app-search-speech',
  templateUrl: './search-speech.component.html',
  styleUrls: ['./search-speech.component.css']
})
export class SearchSpeechComponent implements OnInit {

  constructor(private speechService :SpeechService) { }
public searchValue:any;
public speeches :any = [];
public allSpeeches :any = [];
  ngOnInit() {
    this.allSpeeches = this.speechService.getSpeeches();
  }
  public beforeChange($event: NgbPanelChangeEvent) {

  };

  searchForName(){
    console.log(this.searchValue);
    this.speeches = this.allSpeeches.filter(elem => {return (elem.name == this.searchValue ||elem.tag ==  this.searchValue || elem.author==this.searchValue) })
  }
}
