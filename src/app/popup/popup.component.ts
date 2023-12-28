import { Component } from '@angular/core';
import { PopupControlService } from '../popup-control.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(public popupControlService: PopupControlService, private http: HttpClient, public LoggingService: LoggingService) {}

  formData: any = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;
  successMessage = false;
  formErrors = false;
  isHovered: boolean = false;



  onSubmit() {
  
    if (!this.isFormValid()) {
      this.formErrors = true;
      return;
    }

    // Prepare data in JSON string
    const body = JSON.stringify({
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    });
    
    // API POST Request
    this.http.post('https://9h3992v7k1.execute-api.eu-west-2.amazonaws.com/default/ContactForm', body)
      .subscribe(
        (response) => {
          this.submitted = true;
          this.formErrors = false;
          this.successMessage = true;
          this.popupControlService.closePopupAfterDelay(2000);
        },
        (error) => {
        }
      );
  
    this.submitted = true;
    this.formErrors = false;
    this.popupControlService.closePopupAfterDelay(2000);
  }
  
  isFormValid(): boolean {
    return !!this.formData.name && !!this.formData.email && !!this.formData.message;
  }

  changeIcon(hovering: boolean) {
    this.isHovered = hovering;
  }

  onButtonClick(option: string): void {
    this.LoggingService.logButtonClick(option);
  }
  
}