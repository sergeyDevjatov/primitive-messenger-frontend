import Api from '@/api/Api';


export default class Authentication {
  public static async register(data: {
    phone?: string;
    email?: string;
    firebaseIdToken: string;
    password: string;
  }) {
    return Api.instance.post('/register', data);
  }

  public static async login(data: {
    phone?: string;
    email?: string;
    password: string;
  }) {
    return Api.instance.post('/login', data);
  }
}
