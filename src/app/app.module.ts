import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerRegistrationComponent } from './owner-registration/owner-registration.component';
import { OwnerAddPgComponent } from './owner-add-pg/owner-add-pg.component';
import { OwnerAllListComponent } from './owner-all-list/owner-all-list.component';
import { OwnerRentedComponent } from './owner-rented/owner-rented.component';
import { OwnerRequestComponent } from './owner-request/owner-request.component';

// import { StorageServiceModule } from 'angular-webstorage-service';



const appRoutes:Routes=[
  {path:'', component:LandingComponent},

  {path: 'user', component:UserComponent},
  {path:'user-login', component: UserLoginComponent},
  {path:'user-register', component: UserRegistrationComponent},
  {path: 'user-dashboard', component:UserDashboardComponent},

  {path: 'error-404',  component:Error404Component},
  {path: 'error-500', component:Error500Component},

  {path: 'owner', component:OwnerComponent},
  {path: 'owner-login', component:OwnerLoginComponent},
  {path: 'owner-register', component:OwnerRegistrationComponent},
  {path: 'owner-dashboard', component:OwnerDashboardComponent},
  {path: 'owner-add-pg', component:OwnerAddPgComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserDashboardComponent,
    UserComponent,
    Error404Component,
    Error500Component,
    LandingComponent,
    OwnerComponent,
    OwnerLoginComponent,
    OwnerDashboardComponent,
    OwnerRegistrationComponent,
    OwnerAddPgComponent,
    OwnerAllListComponent,
    OwnerRentedComponent,
    OwnerRequestComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
