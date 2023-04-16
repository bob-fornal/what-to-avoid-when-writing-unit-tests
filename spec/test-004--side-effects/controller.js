
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

  getTime = () => (new Date()).getTime();
  getHours = () => (new Date()).getHours();

  actuateLights = (motionDetected) => {
    if (motionDetected) {
      this.lastMotionTime = this.getTime();
    }

    const timeOfDay = this.getTimeOfDay(this.getHours());
    if (motionDetected && ['Evening', 'Night'].includes(timeOfDay)) {
      this.switcher.turnOn();
    } else if ((this.getTime() - this.lastMotionTime) > 60000 || ['Morning', 'Afternoon'].includes(timeOfDay)) {
      this.switcher.turnOff();
    }
  };
}
