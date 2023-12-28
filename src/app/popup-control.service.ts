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
    this.showPopupSubject.next(true);
  }

  // Close Popup after delay
  closePopupAfterDelay(delay: number) {
    timer(delay).subscribe(() => {
      this.closePopup();
    });
  }

  // When close button is clicked, showPopupSubject = false
  closePopup() {
    this.showPopupSubject.next(false);
  }

}