import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, MyPageComponent  } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StudentsService } from './services/students.service';

import { HttpModule } from '@angular/http';

import { AppConfig } from './config/appconfig';

@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [StudentsService,AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
