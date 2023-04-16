
import { Manager } from '../test-001--in-the-test/manager.js';

describe('Manager Class (NOT Violate DRY)', () => {
  it('expects score to be 200', () => {
    const database = [{ username: 'bob-54321', score: 200, }];
    const manager = new Manager(database);

    const initialScore = manager.getScore('bob-54321');
    expect(initialScore).toEqual(200);
  });

  it('expects "adjustScore" to change the score', () => {
    const database = [{ username: 'bob-54321', score: 200, }];
    const manager = new Manager(database);

    manager.adjustScore('bob-54321', 500);
    const initialScore = manager.getScore('bob-54321');
    expect(initialScore).toEqual(500);
  });
});
