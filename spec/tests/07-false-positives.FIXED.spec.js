
const testableCode = {
  getRejectedPromise: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('fail');
      }, 1000);
    });
  }
};

describe('Fixed False Positives', () => {
  
  it('don\'t test without expects', () => {
    const hello = 'world';
    const life = 42;
    expect(hello).toEqual('world');
    expect(life).toEqual(42);
  });


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

  // it('expects rejection to occur (should follow catch)', function(done) {
  //   testableCode.getRejectedPromise()
  //     .then(function(result) {
  //       expect(result).toEqual('pass');
  //       done();
  //     })
  //     .catch(function(result) {
  //       expect(result).toEqual('fail');
  //       done();
  //     });
  // });

  it('expects rejection to occur (should follow catch)', async () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    const waitPromise = testableCode.getRejectedPromise();
    jasmine.clock().tick(1010);
    let result = '';
    try {
      result = await waitPromise;
    } catch (error) {
      expect(error).toEqual('fail');
    }
    expect(result).toEqual('');
  });
  
});
