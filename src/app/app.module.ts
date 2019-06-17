import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatMenuModule, MatIconModule, MatToolbarModule, MatListModule, MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsService } from './services/highcharts.service';
import { ChartModule } from 'angular-highcharts';
import { environment } from '../environments/environment';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    ChartModule,
    MatTabsModule
  ],
  providers: [
    HighchartsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
