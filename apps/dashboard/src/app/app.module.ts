import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvironmentModule } from '@supp-regimen/environment';
import { environment } from '../environments/environment';
import { CoreDataModule } from "@supp-regimen/core-data";
import { CoreStateModule } from "@supp-regimen/core-state";
import { MaterialModule } from '@supp-regimen/material';
import { UiLoginModule } from '@supp-regimen/ui-login';
import { SuppComponent } from './supps/supps.component';
import { SuppDetailsComponent } from './supps/supp-details/supp-details.component';
import { SuppListComponent } from './supps/supp-list/supp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppComponent,
    SuppListComponent,
    SuppDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

