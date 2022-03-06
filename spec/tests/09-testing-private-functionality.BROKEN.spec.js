
class UserService {
  #users = [
    { name: 'Bob', type: 'admin', state: 'Owner' },
    { name: 'Jen', type: 'user', state: 'User' },
    { name: 'Tim', type: 'tech', state: 'Developer' },
  ];
  #setState = (name, state) => {
    const filtered = this.#users.filter(user => user.name === name);
    filtered.forEach(user => {
      if (user.type !== 'admin') {
        user.state = state;
      } else {
        user.state += `, ${ state }`;
      }
    });
  }
  #delayedProcess = (fn) => {
    setTimeout(() => {
      fn();
    }, 1000);
  };

  setUserState = (name, state) => this.#setState(name, state);
  getUser = (name) => this.#users.filter(user => user.name === name)[0] || this.#users[0];
  triggerDelayed = (fn) => this.#delayedProcess(fn);
}

describe('Testing Private Functionality', () => {
  let service;

  beforeEach(() => {
    service = new UserService();
  });

  it('change admin user', () => {
    service.setUserState('Bob', 'Developer');
    expect(service.getUser('Bob')).toEqual({ name: 'Bob', type: 'admin', state: 'Owner, Developer' });
  });

  it('change tech user', () => {
    service.setUserState('Tim', 'User');
    expect(service.getUser('Tim')).toEqual({ name: 'Tim', type: 'tech', state: 'User' });
  });

  it('expect triggerDelayed to wait correctly', () => {
    let processed = false;
    const fn = () => {
      processed = true;
    }
    jasmine.clock().uninstall();
    jasmine.clock().install();
    service.triggerDelayed(fn);
    jasmine.clock().tick(1010);

    expect(processed).toEqual(true);
  });

});
