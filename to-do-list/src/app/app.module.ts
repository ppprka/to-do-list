import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { ItemListComponent } from './item-list/item-list.component';
import {FormsModule} from "@angular/forms";
import { ColorDirective } from './app.directive';
import { HideDirective } from './item-list/hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    ItemListComponent,
    ColorDirective,
    HideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
