//const adjacentList = new Map();
//adjacentList.set('A', ['B', 'C']);

// takes Map and return destination if found else null
const depthFirstSearch = (start, target, visited = new Set()) => {

    const destinations = adjacentList.get(start)

    console.log(destinations)

    for(const destination of destinations) {

      if (destination == target) {
        return destination;
      }

      if(!visited.has(destination)) {
        //console.log(`new destination found: ${destination}`);
        depthFirstSearch(destination, target, visited);
      }
    }

    return null;
}

module.exports = { depthFirstSearch };
