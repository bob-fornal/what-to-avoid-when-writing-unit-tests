
class DataService {
  data = { user: 'Tom' };

  getSimple = () => {
    return this.data;
  };
}

class TestComponent {
  apiService = null;

  constructor(service) {
    this.apiService = service;
  }

  getData = () => this.apiService.getSimple();
}

describe('Bad Test Double', () => {
  let mockService, mockResult;
  let component;

  beforeEach(() => {
    mockResult = {
      user: 'Bob'
    };
    mockService = {
      getSimple: () => mockResult
    };

    component = new TestComponent(mockService);
  });

  it('expects getData to return data correctly', () => {
    const result = component.getData();
    expect(result).toEqual({ user: 'Bob' });
  });
});
