
export class Manager {
  data = [];

  constructor(database) {
    this.data = database;
  }

  getScore = (username) => {
    const result = this.data.filter((item) => item.username === username);
    return result[0].score;
  };

  adjustScore = (username, score) => {
    const result = this.data.filter((item) => item.username === username);
    result[0].score = score;
  };
}
