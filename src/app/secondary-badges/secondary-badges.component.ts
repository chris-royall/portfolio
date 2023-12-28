import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-secondary-badges',
  templateUrl: './secondary-badges.component.html',
  styleUrls: ['./secondary-badges.component.css']
})
export class SecondaryBadgesComponent {

  constructor(
    public LoggingService: LoggingService
  ) {}

}
