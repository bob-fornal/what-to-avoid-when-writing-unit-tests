
export class DataService {
  data = { user: 'Bob' };

  getSimple = () => {
    return this.data;
  }
};

export class TestComponent {
  apiService = null;

  constructor(service) {
    this.apiService = service;
  }

  getData = () => {
    return this.apiService.getSimple();
  }
}
