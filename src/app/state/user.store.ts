import { Injectable } from '@angular/core';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';
import { IUser } from '../shared/models/user';

export interface UserState extends EntityState<IUser, string>, ActiveState<string> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends EntityStore<UserState> {

  constructor() {
    super();
  }

}

