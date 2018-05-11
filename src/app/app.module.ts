import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './Header/header.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyPageComponent } from './my-page/my-page.component';
import { DataService } from './data.service';
import { KbnRouterModule } from './router/router.module';
import { KbnTaskComponent } from './task/task.component';
import { KbnTaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyPageComponent,
    KbnTaskComponent, KbnTaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    KbnRouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
