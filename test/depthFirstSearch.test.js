const depthFirstSearch = require('../depthFirstSearch');

describe('depthFirstSearch', () => {

  test('should return null if target does not exist', () => {
    testMap = new Map();
    testMap.set('A', ['B', 'C']);
    expect(depthFirstSearch('A', 'D', testMap)).toEqual(null);
  })

  test('should return target if target does exist', () => {
    testMap = new Map();
    testMap.set('A', ['B', 'C']);
    expect(depthFirstSearch('A', 'C', testMap)).toEqual('C');
  })

});
