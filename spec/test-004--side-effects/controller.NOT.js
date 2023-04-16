
export class Switcher {
  turnOn = () => {};
  turnOff = () => {};
}

export class SmartController {
  lastMotionTime = new Date();
  switcher = null;

  constructor(switcher) {
    this.switcher = switcher;
  }

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
      this.switcher.turnOn();
    } else if ((time - this.lastMotionTime) > 60000 || timeOfDay === 'Morning' || timeOfDay === 'Afternoon') {
      this.switcher.turnOff();
    }
  };
}
