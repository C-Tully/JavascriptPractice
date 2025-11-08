//Create a async function that will run all passed in functions in order

async function runInOrder(fns) {
  for (const fn of fns) {
    await fn();
  }
}

const collection = [
  async () => console.log("first"),
  async () => console.log("second"),
  async () => console.log("third"),
];

runInOrder(collection);

//The function runInOrder will fire each function in the collection and await it until it's finished running
// this ensures that each function runs and finishes before moving onto the next. The await is key here as regardless
// of the time to wait for the next function, the await will ensure the first one finishes before moving onto the next.
