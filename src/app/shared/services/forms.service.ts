import { Injectable } from '@angular/core';
import { RxFormGroup } from '@rxweb/reactive-form-validators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

// Using providedIn: 'root' will inject the FormsService in the root of application.
// The FormsService in this case will be used in the shared modules, need to add the config forRoot in the shared module
@Injectable()
export class FormsService {

  private userFormSubject = new Subject<RxFormGroup>();
  private userFormBehaviorSubject = new BehaviorSubject<RxFormGroup>(null);

  constructor() { }

  getUserFormSubject(): Observable<RxFormGroup> {
    return this.userFormSubject.asObservable();
  }

  setUserFormSubject(userForm: RxFormGroup): void {
    this.userFormSubject.next(userForm);
  }

  getUserFormBehaviorSubject(): Observable<RxFormGroup> {
    return this.userFormBehaviorSubject.asObservable();
  }

  setUserFormBehaviorSubject(userForm: RxFormGroup): void {
    this.userFormBehaviorSubject.next(userForm);
  }
}