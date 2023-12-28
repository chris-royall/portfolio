import { Component } from '@angular/core';
import { PopupControlService } from '../popup-control.service';
import { SlideOutService } from '../slide-out.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public PopupControlService: PopupControlService,
    public SlideOutService: SlideOutService,
    public LoggingService: LoggingService
  ) {}

}