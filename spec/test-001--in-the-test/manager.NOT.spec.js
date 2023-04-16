
import { Manager } from './manager.js';

describe('Manager Class (Tester not in the Test)', () => {
  let manager;

  beforeEach(() => {
    const database = [{
      username: 'bob-54321',
      score: 200,
    }];
    manager = new Manager(database);
  });

  it('expects score to be 200', () => {
    const initialScore = manager.getScore('bob-54321');
    expect(initialScore).toEqual(200);
  });
});
