import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstLibraryModule } from 'first-library';
import { ListViewComponent } from './list-view/list-view.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FirstLibraryModule,
    HttpModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
