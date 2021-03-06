import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PathchangeService} from '../pathchange.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  faCoffee = faCoffee;
  faArrowUp=faArrowUp;
  sub: string;
  constructor(private route: ActivatedRoute,private data:  PathchangeService) { }
  AddCurdirUpload() {

    document.forms["fileupload"]["curdirect"].value = this.sub;
    
    return true;
}
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.sub = message)
  }

}


 