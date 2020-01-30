import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SplashComponent } from './components/splash/splash.component';
import {FlatFormComponent} from './components/form/flat-form/flat-form.component';
import {FlatFormControlComponent} from './components/form/flat-form-control/flat-form-control.component';
import {FlatFormControlLabelComponent} from './components/form/flat-form-control-label/flat-form-control-label.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent,
      LoadingComponent,
      NavbarComponent,
      SplashComponent,
      FlatFormComponent,
      FlatFormControlComponent,
      FlatFormControlLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
