
const testableCode = {
  getRejectedPromise: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('fail');
      }, 1000);
    });
  }
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

  it('expects rejection to occur (should pass)', function() {
    testableCode.getRejectedPromise().then(function(result) {
      expect(result).toEqual('failed');
    });
  });
  
});
