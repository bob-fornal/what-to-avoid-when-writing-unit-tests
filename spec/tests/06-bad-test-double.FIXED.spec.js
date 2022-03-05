
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

describe('Fixed Test Double', () => {
  let mockService, mockResult;
  let component;

  beforeEach(() => {
    mockResult = {
      user: 'Bob'
    };
    mockService = new DataService();
    mockService.data = mockResult;

    component = new TestComponent(mockService);
  });

  it('expects getData to return data correctly', async () => {
    const result = await component.getData();
    expect(result).toEqual({ user: 'Bob' });
  });
});
