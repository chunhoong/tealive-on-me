import login from '@assets/json/login.json';
import { User } from '@user/user';
import { UserApi } from './user-api';

export class UserApiMock extends UserApi {
  login(username: string, password): Promise<User> {
    return Promise.resolve(login);
  }
  logout(): Promise<void> {
    return Promise.resolve();
  }
}
