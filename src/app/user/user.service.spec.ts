import { TestBed } from '@angular/core/testing';
import { UserApi } from '@api/user-api';
import { UserApiMock } from '@api/user-api.mock';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserService, { provide: UserApi, useClass: UserApiMock }] });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform login', async () => {
    expect(await service.login('randomUsername', 'VeryPowerfulPassword')).toBeUndefined();
  });
});
