
import { DataService, TestComponent } from "./service.js";

describe('Fixed Test Double', () => {
  let mockService, mockResult;
  let component;

  beforeEach(() => {
    mockResult = {
      user: 'Tim',
    };
    mockService = new DataService();
    mockService.data = mockResult;

    component = new TestComponent(mockService);
  });

  it('expects "getData" to return data correctly', () => {
    const result = component.getData();
    expect(result).toEqual({ user: 'Tim' });
  });
});
