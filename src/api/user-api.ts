import { User } from '@user/user';

export abstract class UserApi {
  abstract login(username: string, password): Promise<User>;
  abstract logout(): Promise<void>;
}
