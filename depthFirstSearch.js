// Usage:
// const edgeMap = new Map();
// adjacentList.set('A', ['B', 'C']);
// const destination = depthFirstSearch('A', 'C', map); 

// takes Map and return destination if found else null
const depthFirstSearch = (start, target, edgeMap, visited = new Set()) => {
    
    visited.add(start);

    const destinations = edgeMap.get(start);

    if (destinations) {

      for(const destination of destinations) {

        console.log(destination);

        if (destination == target) {
          return destination;
        }

        if(!visited.has(destination)) {
          depthFirstSearch(destination, target, edgeMap, visited);
        }

      }
    }

    return null;
}

module.exports = depthFirstSearch;
