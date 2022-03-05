
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

describe('Reader in the Test', () => {
  it('expects score to be 200', () => {
    const database = [{ username: 'bob54321', score: 200 }];
    const manager = new Manager(database);

    const initialScore = manager.getScore('bob54321');
    expect(initialScore).toEqual(200);
  });
});
