import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-primary-badges',
  templateUrl: './primary-badges.component.html',
  styleUrls: ['./primary-badges.component.css']
})
export class PrimaryBadgesComponent {

  constructor(
    public LoggingService: LoggingService
  ) {}

}
