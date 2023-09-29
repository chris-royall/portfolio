import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideOutService {
  // When navigating to webpage, showSlideOutSubject = false
  public showSlideOutSubject = new BehaviorSubject<boolean>(false);
  showSlideOut$ = this.showSlideOutSubject.asObservable();

  // When showPopup is triggered, showSlideOutSubject = true
  showSlideOut() {
    console.log('showSlideOut is toggled'); 
    this.showSlideOutSubject.next(!this.showSlideOutSubject.value);
  }
}