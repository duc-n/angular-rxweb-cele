import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderCompactComponent } from './cele-layout-compact/header-compact/header-compact.component';
import { CeleLayoutCompactComponent } from './cele-layout-compact/cele-layout-compact.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const components = [
  FooterComponent,
  CeleLayoutCompactComponent,
  HeaderCompactComponent

];

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
