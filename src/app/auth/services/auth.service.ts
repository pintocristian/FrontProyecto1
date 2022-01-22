import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/navbar/models/user.interface';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { RoleValidator } from '../helpers/roleValidator';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RoleValidator {
  public user$: Observable<User>;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>('users/${user.uid}').valueChanges();
        }
        return of(null);
      })
    );
  }

  async loginGoogle(): Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) { console.log(error) }
  }
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;

    } catch (error) {
      console.log(error);
    }
  }
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(user: User) {
    try {
      await this.afAuth.signOut();
      this.updateUserData(user);
    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc('users/${user.uid}'
    );

    const data: User = {
      uid: user.uid,
      emailVerified: user.emailVerified,
      email: user.email,
      role: 'Estudiante',
    };

    return userRef.set(data, { merge: true });
  }
}
