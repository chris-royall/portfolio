import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopupControlService } from './popup-control.service';
import { SlideOutService } from './slide-out.service';
import { LoggingService } from './logging.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { PopupComponent } from './popup/popup.component';
import { PrimaryBadgesComponent } from './primary-badges/primary-badges.component';
import { FormSuccessComponent } from './form-success/form-success.component';
import { ProjectsComponent } from './projects/projects.component';
import { SecondaryBadgesComponent } from './secondary-badges/secondary-badges.component';
import { SlideOutPanelComponent } from './slide-out-panel/slide-out-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    PopupComponent,
    PrimaryBadgesComponent,
    FormSuccessComponent,
    ProjectsComponent,
    SecondaryBadgesComponent,
    SlideOutPanelComponent,
    ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [
    PopupControlService,
    SlideOutService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}