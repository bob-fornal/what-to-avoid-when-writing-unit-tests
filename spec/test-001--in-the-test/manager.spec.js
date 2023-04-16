
import { Manager } from './manager.js';

describe('Manager Class (Tester in the Test)', () => {
  it('expects score to be 200', () => {
    const database = [{ username: 'bob-54321', score: 200, }];
    const manager = new Manager(database);

    const initialScore = manager.getScore('bob-54321');
    expect(initialScore).toEqual(200);
  });
});
