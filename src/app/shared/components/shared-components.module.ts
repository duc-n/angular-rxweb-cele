import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutsModule,
    RxReactiveFormsModule
  ],
  declarations: [],
  exports: [ReactiveFormsModule, RxReactiveFormsModule],
  entryComponents: []
})
export class SharedComponentsModule { }
