import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { ICRUDService } from './i-crud.service';
import { map } from 'rxjs/operators';
import { IBaseEntity } from '../models/iBaseEntity';

export abstract class CrudService<T extends IBaseEntity> implements ICRUDService<T> {

  protected collection: AngularFirestoreCollection<T>;

  protected logger: NGXLogger;

  constructor(path: string, protected afs: AngularFirestore, logger: NGXLogger) {
    this.collection = this.afs.collection(path);
    this.logger = logger;
  }

  get(identifier: string): Observable<T> {
    this.logger.debug('[BaseService] get id', identifier);

    return this.collection
      .doc<T>(identifier)
      .snapshotChanges()
      .pipe(
        map(doc => {
          if (doc.payload.exists) {
            const data = doc.payload.data() as any;
            const id = doc.payload.id;
            return { id, ...data };
          }
        })
      );
  }

  list(): Observable<T[]> {
    this.logger.debug('[BaseService] list');
    return this.collection
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as T;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  add(item: T): Promise<T> {
    this.logger.debug('[BaseService] adding item', item);

    // parsing id in the doc
    // this.collection.doc("new-user-id").set(item);

    const promise = new Promise<T>((resolve, reject) => {
      // automatic generate id by using add
      this.collection.add(item).then(ref => {
        const newItem = {
          id: ref.id,
          ...(item as any)
        };
        resolve(newItem);
      }, (error) => {
        reject(error);
      });

    });

    return promise;
  }

  update(item: T): Promise<T> {
    this.logger.debug('[BaseService] updating item', item.id);
    const promise = new Promise<T>((resolve, reject) => {

      this.collection
        .doc<T>(item.id)
        .set(item)
        .then(() => {
          resolve({
            ...(item as any)
          });
        }, (error) => {
          reject(error);
        });
    });

    return promise;
  }

  delete(id: string): void {
    this.logger.debug('[BaseService] deleting item', id);
    const docRef = this.collection.doc<T>(id);

    docRef.delete();
  }
}
