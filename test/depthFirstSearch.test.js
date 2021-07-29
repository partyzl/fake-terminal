const depthFirstSearch = require('../depthFirstSearch')

require('depthFirstSearch', () => {

  test('should return null if target does not exist', () => {
    testMap = new Map();
    testMap.set('A', ['B', 'C']);
    expect(depthFirstSearch(testMap, 'D')).toEqual(null);
  })

});
