import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './Header/header.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { KbnRouterModule } from './router/router.module';
import { KbnTaskComponent } from './task/task.component';
import { KbnTaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KbnTaskComponent, KbnTaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    KbnRouterModule, FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
