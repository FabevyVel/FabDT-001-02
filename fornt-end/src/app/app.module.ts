import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, MyPageComponent  } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StudentsService } from './services/students.service';
import { UserService } from './services/user.service';


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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentsService, UserService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
