import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient) {}

  // When button is clicked
  logButtonClick(buttonClicked: string): void {
    // Prepare data in JSON format
    const body = JSON.stringify({
      buttonClicked
    });

    // API POST Request
    this.http.post('https://m1jp17h33i.execute-api.eu-west-2.amazonaws.com/default/LinkSelection', body)
      .subscribe(
        (response) => {
          console.log('API Response:', response);
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
  }
}