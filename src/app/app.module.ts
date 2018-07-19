// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { NavComponent } from './nav/nav.component';
// import { RegistrationComponent } from './registration/registration.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     WelcomeComponent,
//     DashboardComponent,
//     HomeComponent,
//     LoginComponent,
//     NavComponent,
//     RegistrationComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EqualValidatorDirective } from './shared/equal.validator.directive';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {Nsestock} from './welcome/nsestock';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { NsestockService } from './welcome/nsestock.service';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
// import { KkkComponent } from './kkk/kkk.component';
import { MatTableModule,MatCheckboxModule,MatGridListModule} from '@angular/material';
import {MatPaginatorModule,MatSortModule} from '@angular/material';
const myRoots: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent },
  { path: 'portfolio', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

    // { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]}
     
      // {path : 'dashboard/:id', component : DashboardComponent, data : {some_data : 'textdoc'}}
    {path : 'dashboard', component : DashboardComponent,}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    EqualValidatorDirective,
    WelcomeComponent,
    DashboardComponent
  
  ],
  imports: [
         MatCheckboxModule, MatGridListModule , MatTableModule ,MatPaginatorModule,MatSortModule,  BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,HttpModule,
    RouterModule.forRoot(myRoots)
  ],
     exports: [ MatToolbarModule, MatInputModule, MatTableModule,MatSortModule ],
  providers: [AuthService, AuthGuard, NsestockService,NsestockService, DashboardService],
  bootstrap: [AppComponent],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }

