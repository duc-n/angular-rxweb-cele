import { FormsService } from './../../shared/services/forms.service';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private _scavenger = new Scavenger(this);
  constructor(private logger: NGXLogger,
    private formsService: FormsService) { }

  ngOnInit(): void {
    this.logger.debug('UserProfileComponent init');

    this.formsService.getUserFormSubject().pipe(this._scavenger.collect()).subscribe(form => {
      this.logger.debug('UserProfileComponent - User Form Subject updated : ', form);
    });

    this.formsService.getUserFormBehaviorSubject().pipe(this._scavenger.collect()).subscribe(form => {
      this.logger.debug('UserProfileComponent - User Form BehaviorSubject updated : ', form);
    });
  }

  ngOnDestroy(): void {
    //rx-scavenger will be injected here to unsubcribe observables
  }
}
