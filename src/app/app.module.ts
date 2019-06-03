import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

// Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
