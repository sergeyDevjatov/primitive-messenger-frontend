import Vue from 'vue';


export default class Authentication {

  public async logIn(credentials: {
    email?: string;
    phone?: string;
  }, password: string): Promise<void> {
    if(credentials.email) {

    }
  }

  private static __instance: Authentication | null;

  public static get instance(): Authentication {
    // eslint-disable-next-line no-return-assign
    return Authentication.__instance
      || (Authentication.__instance = Vue.observable(new Authentication()));
  }
}
