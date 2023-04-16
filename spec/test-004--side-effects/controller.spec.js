
import { Switcher, SmartController } from "./controller.js";

describe('Testing Fixed Side Effects Code', () => {
  let switcher;
  let controller;

  beforeEach(() => {
    switcher = new Switcher();
    controller = new SmartController(switcher);
  });

  it('expects fixed side effects code to work right, turn off', () => {
    controller.lastMotionTime = 0;
    spyOn(controller, 'getTime').and.returnValue(60001);
    spyOn(controller, 'getHours').and.returnValue(20);
    spyOn(controller.switcher, 'turnOn').and.stub();
    spyOn(controller.switcher, 'turnOff').and.stub();

    controller.actuateLights(false);
    expect(controller.switcher.turnOff).toHaveBeenCalled();
  });

  it('expects fixed side effects code to work right, turn on', () => {
    controller.lastMotionTime = 0;
    spyOn(controller, 'getTime').and.returnValue(60001);
    spyOn(controller, 'getHours').and.returnValue(20);
    spyOn(controller.switcher, 'turnOn').and.stub();
    spyOn(controller.switcher, 'turnOff').and.stub();

    controller.actuateLights(true);
    expect(controller.switcher.turnOn).toHaveBeenCalled();
  });
});