
import { getTimeOfDay } from "./time.NOT.js";

describe('Testing non-Deterministic Code', () => {
  it('expects the poisoned code to work, Night', () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    const basetime = new Date(2022, 1, 1, 2, 0, 0);
    jasmine.clock().mockDate(basetime);
    jasmine.clock().tick(50);

    expect(getTimeOfDay()).toEqual('Night');
  });
});
