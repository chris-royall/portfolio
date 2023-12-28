import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    public LoggingService: LoggingService
  ) {}

  onButtonClick(option: string): void {
    this.LoggingService.logButtonClick(option);
  }

}
