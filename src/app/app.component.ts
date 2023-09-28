import { Component, OnInit } from '@angular/core';
import { PopupControlService } from './popup-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Webpage Title
  title = 'Chris Royall';

  // When navigating to webpage, showLoading = true
  showLoading = true;

  // When navigating to webpage, showPopup = false
  showPopup = false;

  // popupControlService is accessible outside the class
  constructor(public popupControlService: PopupControlService) {
    console.log('Loading status:', this.showLoading);
  }

  // After 2 seconds, showLoading = false
  ngOnInit() {
    setTimeout(() => {
      this.showLoading = false;
      console.log('Loading status:', this.showLoading);
    }, 2000);

  // Subscribe to showPopup$
  this.popupControlService.showPopup$.subscribe((showPopup) => {
    console.log('Popup status:', showPopup);
    this.showPopup = showPopup;
  });
    
  }
  
}