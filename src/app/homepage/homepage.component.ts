import { Component, OnInit } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  basePath = '/images';                       //  <<<<<<<
  downloadableURL = '';                      //  <<<<<<<

  ngOnInit(): void {
    
  }

}
