// popup-control.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PopupControlService {

  // When navigating to webpage, showPopupSubject = false
  private showPopupSubject = new BehaviorSubject<boolean>(false);
  showPopup$ = this.showPopupSubject.asObservable();

  // When showPopup is triggered, showPopupSubject = true
  showPopup() {
    console.log('showPopup'); 
    this.showPopupSubject.next(true);
  }

  // Close Popup after delay
  closePopupAfterDelay(delay: number) {
    console.log('closePopupAfterDelay'); 
    timer(delay).subscribe(() => {
      console.log('Delay Reached'); 
      this.closePopup();
    });
  }

  // When close button is clicked, showPopupSubject = false
  closePopup() {
    console.log('closePopup');
    this.showPopupSubject.next(false);
  }

}