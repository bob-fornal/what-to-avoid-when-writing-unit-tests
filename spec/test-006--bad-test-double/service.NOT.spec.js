
import { TestComponent } from "./service.js";

describe('Bad Test Double', () => {
  let mockService, mockResult;
  let component;

  beforeEach(() => {
    mockResult = {
      user: 'Tim'
    };
    mockService = {
      getSimple: () => mockResult,
    }

    component = new TestComponent(mockService);
  });

  it('expects "getData" to return data correctly', () => {
    const result = component.getData();
    expect(result).toEqual({ user: 'Tim' });
  });
});