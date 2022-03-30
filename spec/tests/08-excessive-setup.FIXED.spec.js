
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

  beforeEach(() => {
    serivce = new CarService();
  });

  it('expects averageMpg to return correct value', () => {
    const result = service.averageMpg('Ford');
    expect(result).toEqual(13);
  });
});
