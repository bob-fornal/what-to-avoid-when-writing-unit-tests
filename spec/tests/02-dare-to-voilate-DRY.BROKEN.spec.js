
class Manager {
  data = [];

  constructor (database) {
    this.data = database;
  }

  getScore = (username) => {
    const result = this.data.filter(item => item.username === username);
    return result[0].score;
  };

  adjustScore = (username, score) => {
    const result = this.data.filter(item => item.username === username);
    result[0].score = score;
  };
}

describe('Reader not in the Test', () => {
  let manager;

  beforeEach(() => {
    const database = [{
      username: 'bob54321',
      score: 200
    }];
    manager = new Manager(database);
  });

  it('expects score to be 200', () => {
    const initialScore = manager.getScore('bob54321');
    expect(initialScore).toEqual(200);
  });

  it('expects "adjustScore" to change the score', () => {
    manager.adjustScore('bob54321', 500);
    const initialScore = manager.getScore('bob54321');
    expect(initialScore).toEqual(500);
  });
});
