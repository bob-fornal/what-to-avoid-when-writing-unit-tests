
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

  getTime = () => (new Date()).getTime();
  getHours = () => (new Date()).getHours();

  actuateLights = (motionDetected, turnOn, turnOff) => {
    if (motionDetected) {
      this.lastMotionTime = this.getTime();
    }

    const timeOfDay = this.getTimeOfDay(this.getHours());
    if (motionDetected && (timeOfDay === 'Evening' || timeOfDay === 'Night')) {
      turnOn();
    } else if ((this.getTime() - this.lastMotionTime) > 60000 || (timeOfDay === 'Morning' || timeOfDay === 'Noon')) {
      turnOff();
    }
  };
}
const smartController = new SmartController();

describe('Testing Fixed Side Effects Code', () => {
  let isOn = false;
  const turnOn = () => isOn = true;
  const turnOff = () => isOn = false;

  beforeEach(() => {
    isOn = false;
  });

  it('expects fixed side effects code to work right, turn off', () => {
    smartController.lastMotionTime = 0;
    spyOn(smartController, 'getTime').and.returnValue(60001);
    spyOn(smartController, 'getHours').and.returnValue(20);

    smartController.actuateLights(false, turnOn, turnOff);
    expect(isOn).toEqual(false);
  });

  it('expects fixed side effects code to work right, turn on', () => {
    smartController.lastMotionTime = 0;
    spyOn(smartController, 'getTime').and.returnValue(60001);
    spyOn(smartController, 'getHours').and.returnValue(20);

    smartController.actuateLights(true, turnOn, turnOff);
    expect(isOn).toEqual(true);
  });
});

