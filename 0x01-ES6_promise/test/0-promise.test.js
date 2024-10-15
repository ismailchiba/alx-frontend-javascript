import getResponseFromAPI from '../0-promise';

describe('getResponseFromAPI', () => {
  it('should return a Promise', () => {
    expect.assertions(1); // Expect 1 assertion in this test
    const response = getResponseFromAPI();
    expect(response).toBeInstanceOf(Promise);
  });
});
