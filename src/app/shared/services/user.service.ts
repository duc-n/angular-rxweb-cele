import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NGXLogger } from 'ngx-logger';
import { User } from '../models/user';
import { CrudService } from './crud.service';

@Injectable()
export class UserService extends CrudService<User>{

  constructor(afs: AngularFirestore, logger: NGXLogger) {
    const path = 'users';
    super(path, afs, logger);
  }
}
