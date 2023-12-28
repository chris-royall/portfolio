import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(
    public LoggingService: LoggingService
  ) {}

  onButtonClick(option: string): void {
    this.LoggingService.logButtonClick(option);
  }

}
