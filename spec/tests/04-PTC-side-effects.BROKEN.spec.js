
class Switcher {
  turnOn = () => {};
  turnOff = () => {};
}
const switcher = new Switcher();

class SmartController {
  lastMotionTime = new Date();

  getTimeOfDay = (hour) => {
    if (hour >= 0 && hour < 6) return 'Night';
    if (hour >= 6 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 18) return 'Afternoon';
    return 'Evening';
  };

  actuateLights = (motionDetected) => {
    const date = new Date();
    const time = date.getTime();
  
    if (motionDetected) {
      this.lastMotionTime = time;
    }

    const timeOfDay = this.getTimeOfDay(date.getHours());
    if (motionDetected && (timeOfDay === 'Evening' || timeOfDay === 'Night')) {
      switcher.turnOn();
    } else if ((time - this.lastMotionTime) > 60000 || (timeOfDay === 'Morning' || timeOfDay === 'Noon')) {
      switcher.turnOff();
    }
  };
}
const smartController = new SmartController();

describe('Testing Side Effects Code', () => {
  it('expects side effects code to work right, turn off', () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    const lastMotionTime = new Date(2022, 1, 1, 19, 0, 0);
    const currentMotionTime = new Date(2022, 1, 1, 19, 2, 0);
    jasmine.clock().mockDate(currentMotionTime);
    smartController.lastMotionTime = lastMotionTime.getTime();
    spyOn(switcher, 'turnOn').and.stub();
    spyOn(switcher, 'turnOff').and.stub();

    smartController.actuateLights(false);
    expect(switcher.turnOff).toHaveBeenCalled();
  });

  it('expects side effects code to work right, turn on', () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    const lastMotionTime = new Date(2022, 1, 1, 19, 0, 0);
    const currentMotionTime = new Date(2022, 1, 1, 19, 2, 0);
    jasmine.clock().mockDate(currentMotionTime);
    smartController.lastMotionTime = lastMotionTime.getTime();
    spyOn(switcher, 'turnOn').and.stub();
    spyOn(switcher, 'turnOff').and.stub();

    smartController.actuateLights(true);
    expect(switcher.turnOn).toHaveBeenCalled();
  });
});

