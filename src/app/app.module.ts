import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';

import { HttpInterceptorService } from './Interceptor/http-interceptor.service';

import { HasAccessService } from './services/Authentication/has-access.service'
import { AuthenticationService } from './services/Authentication/authentication.service'
import { APIClient } from './services/api-client.service';
import { TableModule } from 'primeng/table'
// import { ButtonModule, CalendarModule, InputTextModule, TableModule } from 'primeng-lts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: StudentComponent, pathMatch: 'full', canActivate: [HasAccessService] },
      { path: 'login', component: LoginComponent }
    ]),
    TableModule,
    // CalendarModule,
		// ButtonModule,
    // InputTextModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    HasAccessService, AuthenticationService, APIClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
