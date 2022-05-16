import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { ItemListComponent } from './item-list/item-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorDirective } from './color-type.directive';
import { HideDirective } from './item-list/hide.directive';
import {StorageService} from "./storage.service";

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
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
