import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';
import { RouterModule } from '@angular/router';
import { FormsService } from './services/forms.service';
import { UserService } from './services/user.service';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ],
  exports: [SharedComponentsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [FormsService, UserService] // Shared Service must be declare here
    }
  }
}
