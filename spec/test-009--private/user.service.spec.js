
import { UserService } from "./user.service.js";

describe('Testing Private Functionality', () => {
  let service;

  beforeEach(() => {
    service = new UserService();
  });

  it('expects "setUSerState" to change admin user', () => {
    service.setUserState('Bob', 'Developer');
    expect(service.getUser('Bob')).toEqual({ name: 'Bob', type: 'admin', state: 'Owner, Developer' });
  });

  it('expects "setUserState" to change tech user', () => {
    service.setUserState('Tim', 'User');
    expect(service.getUser('Tim')).toEqual({ name: 'Tim', type: 'tech', state: 'User' });
  });

  // it('expects "triggerDelayed" to wait correctly', () => {
  //   let processed = false;
  //   const fn = () => {
  //     processed = true;
  //   };
  //   jasmine.clock().uninstall();
  //   jasmine.clock().install();
  //   service.triggerDelayed(fn);

  //   jasmine.clock().tick(1010);
  //   expect(processed).toEqual(true);
  // });

  it('expects "visibleSetTimeoutHandler" to trigger the fn', () => {
    let processed = false;
    const fn = () => {
      processed = true;
    };

    service.visibleSetTimeoutHandler(fn);
    expect(processed).toEqual(true);
  });
});