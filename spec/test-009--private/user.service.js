
export class UserService {
  #users = [
    { name: 'Bob', type: 'admin', state: 'Owner' },
    { name: 'Jen', type: 'user', state: 'User' },
    { name: 'Tim', type: 'tech', state: 'Developer' },
  ];

  #setState = (name, state) => {
    const filtered = this.#users.filter((user) => user.name === name);
    filtered.forEach((user) => {
      if (user.type !== 'admin') {
        user.state = state;
      } else {
        user.state += `, ${state}`;
      }
    });
  };

  visibleSetTimeoutHandler = (fn) => fn();
  #delayedProcess = (fn) => {
    setTimeout(this.visibleSetTimeoutHandler.bind(this, fn), 1000);
  };

  setUserState = (name, state) => this.#setState(name, state);
  getUser = (name) => this.#users.filter(user => user.name === name)[0] || this.#users[0];
  triggerDelayed = (fn) => this.#delayedProcess(fn);
}
