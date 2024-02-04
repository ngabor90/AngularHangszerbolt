import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangszerekComponent } from './hangszerek/hangszerek.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KerdesekComponent } from './kerdesek/kerdesek.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { Guitar1Component } from './guitar1/guitar1.component';
import { Guitar2Component } from './guitar2/guitar2.component';
import { Guitar3Component } from './guitar3/guitar3.component';
import { Guitar4Component } from './guitar4/guitar4.component';

@NgModule({
  declarations: [
    AppComponent,
    HangszerekComponent,
    RolunkComponent,
    KapcsolatComponent,
    FooldalComponent,
    KerdesekComponent,
    ErrorComponent,
    Guitar1Component,
    Guitar2Component,
    Guitar3Component,
    Guitar4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
