import { Injectable } from '@angular/core';
import { UserApi } from '@api/user-api';
import { User } from './user';

@Injectable()
export class UserService {
  currentUserDetail: User;

  constructor(private userApi: UserApi) {}

  async login(username: string, password: string): Promise<void> {
    this.currentUserDetail = await this.userApi.login(username, password);
  }
}
