import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsrsLogic } from './usrs-logic/usrs.component';

@NgModule({
  declarations: [
    AppComponent,
    UsrsLogic
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,UsrsLogic]
})
export class AppModule { }
