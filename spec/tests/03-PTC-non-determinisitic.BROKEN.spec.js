
const getTimeOfDay = () => {
  const date = new Date();
  const hour = date.getHours(); // 0 to 23

  if (hour >= 0 && hour < 6) return 'Night';
  if (hour >= 6 && hour < 12) return 'Morning';
  if (hour >= 12 && hour < 18) return 'Afternoon';
  return 'Evening';
};

describe('Testing non-Deterministic Code', () => {
  it('expects poison code to work, night', () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    const basetime = new Date(2022, 1, 1, 2, 0, 0);
    jasmine.clock().mockDate(basetime);
    jasmine.clock().tick(50);

    expect(getTimeOfDay()).toEqual('Night');
  });
});
