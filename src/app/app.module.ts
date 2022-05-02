import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [BrowserModule, FormsModule, MDBBootstrapModule.forRoot()],
  declarations: [AppComponent, HelloComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
