import { Component, OnInit } from '@angular/core';
import { PopupControlService } from './popup-control.service';
import { SlideOutService } from './slide-out.service';

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

  // When navigating to webpage, showSlideOut = false
  showSlideOut = false;

  // Inject the popupControlService and SlideOutService
  constructor(
    public popupControlService: PopupControlService,
    public SlideOutService: SlideOutService
  ) {
  }

  // After 2 seconds, showLoading = false
  ngOnInit() {
    setTimeout(() => {
      this.showLoading = false;
    }, 2000);

    // Subscribe to showPopup$
    this.popupControlService.showPopup$.subscribe((showPopup) => {
      this.showPopup = showPopup;
    });

    // Subscribe to showSlideOut$
    this.SlideOutService.showSlideOut$.subscribe((showSlideOut) => {
      this.showSlideOut = showSlideOut;
    });
  }

}
