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
import { CardState } from './State/card.state';
import { NgxsModule } from '@ngxs/store'
import { environment } from 'src/environments/environment';
import { WasteComponent } from './waste/waste.component';
import { CardComponent } from './card/card.component';
import { StartGameComponent } from './start-game/start-game.component';
import { TableauComponent } from './tableau/tableau.component';
import { FoundationComponent } from './foundation/foundation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutUsComponent,
    DrawCardComponent,
    WasteComponent,
    CardComponent,
    StartGameComponent,
    TableauComponent,
    FoundationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxsModule.forRoot([CardState]),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
