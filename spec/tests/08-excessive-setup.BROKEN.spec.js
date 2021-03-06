
class CarService {
  cars = [
    { brand: 'Ford', type: 'truck', model: 'F-150', mpg: 20 },
    { brand: 'Ford', type: 'truck', model: 'F-250', mpg: 15 },
    { brand: 'Ford', type: 'truck', model: 'F-350', mpg: 12 },
    { brand: 'Ram', type: 'truck', model: '1500', mpg: 25 }
  ];

  averageMpg = (brand) => {
    const brandList = this.getList(brand);
    let total = 0;
    brandList.forEach(car => {
      total += car.mpg;
    });
    const average = total / brandList.length;
    return average;
  };

  getList = (brand) => this.cars.filter(car => car.brand === brand);
}

descbribe('Testing with Excessive Setup', () => {
  let service;

  const testData = [
    { brand: 'test', type: 'test', model: 'test', mpg: 100 },
    { brand: 'test', type: 'test', model: 'test', mpg: 100 },
    { brand: 'test', type: 'test', model: 'test', mpg: 100 },
    { brand: 'test', type: 'test', model: 'test', mpg: 100 },
    { brand: 'test', type: 'test', model: 'test', mpg: 100 },
    { brand: 'test', type: 'test', model: 'test', mpg: 100 }
  ];

  beforeEach(() => {
    serivce = new CarService();
    service.cars.push(...testData);
  });

  it('expects averageMpg to return correct value', () => {
    spyOn(service, 'getList').and.returnValue(testData);

    const result = service.averageMpg('test');
    expect(result).toEqual(100);
  });
});
