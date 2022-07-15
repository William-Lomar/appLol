import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxBoxModule, DxButtonModule, DxFormModule, DxListModule, DxMenuModule, DxSelectBoxModule, DxTagBoxModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { DxiFieldModule } from 'devextreme-angular/ui/nested';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroComponent } from './core/error/error.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { OptionsComponent } from './core/options/options.component';
import { ResultsComponent } from './core/results/results.component';
import { RotationComponent } from './core/rotation/rotation.component';
import { TestesComponent } from './core/testes/testes.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ErroComponent,
    RotationComponent,
    OptionsComponent,
    ResultsComponent,
    TestesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxMenuModule,
    DxFormModule,
    DxTemplateModule,
    DxTagBoxModule,
    DxiFieldModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxListModule,
    DxBoxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
