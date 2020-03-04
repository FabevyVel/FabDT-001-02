import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, MyPageComponent  } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StudentsService } from './students.service';



@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD:front-end/src/app/app.module.ts
    BrowserAnimationsModule,
    
=======
    HttpClientModule
>>>>>>> 9566e9150982c0e1fd6c403e98018ab1794c819e:fornt-end/src/app/app.module.ts
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
