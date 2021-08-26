import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SUPP_ENVIRONMENT } from './supp.token';
import { SuppEnvironment } from "./supp.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: SuppEnvironment): ModuleWithProviders<EnvironmentModule> {
  return {
    ngModule: EnvironmentModule,
    providers: [
      {
        provide: SUPP_ENVIRONMENT,
        useValue: environment
      }
    ]
  }
  }}
