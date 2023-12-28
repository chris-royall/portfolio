import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-slide-out-panel',
  templateUrl: './slide-out-panel.component.html',
  styleUrls: ['./slide-out-panel.component.css']
})
export class SlideOutPanelComponent {

  constructor(
    public LoggingService: LoggingService
  ) {}

}