
const testableCode = {
  getRejectedPromise: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('fail');
      }, 1000);
    });
  },
};

describe('False Positives', () => {
  it('no expects at all', () => {
    const hello = 'world';
    const life = 42;
  });

  it('expect inside setTimeout', () => {
    setTimeout(() => {
      expect(true).toEqual(false);
    }, 100);
  });

  it('expects reject to occur', () => {
    testableCode.getRejectedPromise().then((result) => {
      expect(result).toEqual('failed');
    });
  });
});
