import { SharedComponentsModule } from './../../shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
