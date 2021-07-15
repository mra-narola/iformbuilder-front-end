import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let user_service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    user_service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(user_service).toBeTruthy();
  });
});
