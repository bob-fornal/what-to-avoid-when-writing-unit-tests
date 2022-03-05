
describe('False Positives', () => {
  
  it('expect inside setTimeout', () => {
    setTimeout(() => {
      expect(true).toEqual(false);
    }, 100);
  });
  
});
