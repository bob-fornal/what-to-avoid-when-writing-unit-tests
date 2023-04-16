
import { Switcher, SmartController } from "./controller.NOT.js";

describe('Testing Side Effects Code', () => {
  let switcher;
  let controller;

  beforeEach(() => {
    switcher = new Switcher();
    controller = new SmartController(switcher);
  });

  it('expect side effects code to work right, turn off', () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    const lastMotionTime = new Date(2022, 1, 1, 19, 0, 0);
    const currentMotionTime = new Date(2022, 1, 1, 19, 2, 0);
    jasmine.clock().mockDate(currentMotionTime);
    controller.lastMotionTime = lastMotionTime.getTime();
    spyOn(controller.switcher, 'turnOn').and.stub();
    spyOn(controller.switcher, 'turnOff').and.stub();

    controller.actuateLights(false);
    expect(controller.switcher.turnOff).toHaveBeenCalled();
  });

  it('expect side effects code to work right, turn on', () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    const lastMotionTime = new Date(2022, 1, 1, 19, 0, 0);
    const currentMotionTime = new Date(2022, 1, 1, 19, 2, 0);
    jasmine.clock().mockDate(currentMotionTime);
    controller.lastMotionTime = lastMotionTime.getTime();
    spyOn(controller.switcher, 'turnOn').and.stub();
    spyOn(controller.switcher, 'turnOff').and.stub();

    controller.actuateLights(true);
    expect(controller.switcher.turnOn).toHaveBeenCalled();
  });
});