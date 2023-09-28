import { Component } from '@angular/core';
import { PopupControlService } from '../popup-control.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public popupControlService: PopupControlService) {}

}