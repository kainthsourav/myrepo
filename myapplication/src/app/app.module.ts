import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondComponent } from './second/second.component';
import { ThridComponent } from './thrid/thrid.component';
import { FOurComponent } from './four/four.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    SecondComponent,
    ThridComponent,
    FOurComponent,
    HomeComponent,
    ContactComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
