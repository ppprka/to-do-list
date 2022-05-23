import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { ItemListComponent } from './item-list/item-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorDirective } from './color-type.directive';
import { HideDirective } from './item-list/hide.directive';
import {StorageService} from "./storage.service";
import { StringSplitPipe } from './item-list/string-split.pipe';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { IonicModule } from '@ionic/angular';
import {IonicStorageModule} from "@ionic/storage-angular";
import {taskReducer} from "./state/tasks/task.reducer";
import {TaskEffects} from "./state/tasks/task.effects";

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    ItemListComponent,
    ColorDirective,
    HideDirective,
    StringSplitPipe
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        EffectsModule.forRoot([TaskEffects]),
        StoreModule.forRoot({
          tasks: taskReducer
        }),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        }),
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),

    ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
