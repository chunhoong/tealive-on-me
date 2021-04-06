import { User } from '@user/user';
import { UserApi } from './user-api';

export class UserApiImpl extends UserApi {
  login(username: string, password): Promise<User> {
    throw new Error('Method not implemented.');
  }
  logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
