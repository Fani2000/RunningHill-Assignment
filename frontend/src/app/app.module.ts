import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatCardModule} from "@angular/material/card";
import { DragSectionComponent } from './components/drag-section/drag-section.component'
import {MatChipsModule} from '@angular/material/chips';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    DragSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule, 
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
