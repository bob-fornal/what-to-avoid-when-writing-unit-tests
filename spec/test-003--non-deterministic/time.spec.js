
import { getTimeOfDay } from "./time.js";

describe('Testing Fixed non-Deterministic Code', () => {
  it('expects non-poisoned code to work, night', () => {
    expect(getTimeOfDay(2)).toEqual('Night');
  });
});
