import * as firebase from 'firebase/app';

import 'firebase/auth';

import firebaseConfig from '@/config/firebase.config';


firebase.initializeApp(firebaseConfig);

export enum FirebasePhoneAuthenticationState {
  INITIAL,
  ENTER_PHONE,
}

export default class FirebasePhoneAuthentication {
  protected _verifier: firebase.auth.RecaptchaVerifier | null = null;
  protected _confirmationResult: firebase.auth.ConfirmationResult | null = null;

  public async verifyRecaptcha(container: string | Element): Promise<void> {
    return new Promise((resolve, reject) => {
      this._verifier = new firebase.auth.RecaptchaVerifier(container, {
        size: 'invisible',
        'expired-callback': () => {
          reject();
        },
      });
      resolve();
    });
  }

  public async sendCode(phone: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if(!this._verifier) {
        reject();
        return;
      }
      firebase.auth()
        .signInWithPhoneNumber(phone, this._verifier)
        .then((confirmationResult: firebase.auth.ConfirmationResult) => {
          this._confirmationResult = confirmationResult;
          resolve();
        })
        .catch(reject);
    });
  }

  public async confirmCode(code: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if(!this._confirmationResult) {
        reject();
        return;
      }
      this._confirmationResult
        .confirm(code)
        .then((result) => {
          resolve(result);
        })
        .catch(reject);
    });
  }

  // public static* authenticate(): IterableIterator<{
  //   state: FirebasePhoneAuthenticationState;
  //   data: any;
  // }> {
  //   const verifier =
  // }
}
