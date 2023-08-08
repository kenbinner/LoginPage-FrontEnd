import { User } from '../model/user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(0, "kengo", "kengo.binner@infosys.com", "123Infy")).toBeTruthy();
  });
});
