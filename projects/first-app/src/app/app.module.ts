import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstLibraryModule } from 'first-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstLibraryModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
