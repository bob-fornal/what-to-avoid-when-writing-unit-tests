
import { Manager } from '../test-001--in-the-test/manager.js';

describe('Manager Class (Violate DRY)', () => {
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

  it('expects "adjustScore" to change the score', () => {
    manager.adjustScore('bob-54321', 500);

    const initialScore = manager.getScore('bob-54321');
    expect(initialScore).toEqual(500);
  });
});
