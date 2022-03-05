
describe('Fixed False Positives', () => {
  
  it('expect inside setTimeout (timer)', () => {
    let result = false;
    jasmine.clock().uninstall();
    jasmine.clock().install();
    setTimeout(() => {
      result = true;
    }, 100);

    jasmine.clock().tick(110);
    expect(result).toEqual(true);
  });
  
});
