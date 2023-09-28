import { Component } from '@angular/core';
import { PopupControlService } from '../popup-control.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(public popupControlService: PopupControlService, private http: HttpClient) {}

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
    console.log('Attempting to Submit');
  
    if (!this.isFormValid()) {
      console.log('Field is empty');
      this.formErrors = true;
      return;
    }

    // Prepare data in JSON string
    const body = JSON.stringify({
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    });
    const jsonData = JSON.stringify(body);
    console.log(jsonData);
    
    // API POST Request
    this.http.post('https://9h3992v7k1.execute-api.eu-west-2.amazonaws.com/default/ContactForm', body)
      .subscribe(
        (response) => {
          console.log('API Response:', response);
          this.submitted = true;
          this.formErrors = false;
          this.successMessage = true;
          this.popupControlService.closePopupAfterDelay(2000);
        },
        (error) => {
          console.error('API Error:', error);
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
    console.log('Hovering Changed');
    this.isHovered = hovering;
  }
  
}