import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppFacade } from './supps/supps.facade';

@NgModule({
  imports: [CommonModule],
  providers: [SuppFacade]
})
export class CoreStateModule {}
