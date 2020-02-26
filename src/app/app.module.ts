import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import {AppRoutingModule} from './app-routing.module';
import {MainMenuComponent} from './shared/main-menu/main-menu.component';
import {HeaderComponent} from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
