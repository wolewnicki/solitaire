import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DrawCardComponent } from './draw-card/draw-card.component';
import { DatePipe } from '@angular/common';
import { State } from './State/state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutUsComponent,
    DrawCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [DatePipe, State],
  bootstrap: [AppComponent]
})
export class AppModule { }
