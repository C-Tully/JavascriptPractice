//Describe the following Deepclone function

/**
 *
 * Deep cloning an object in JavaScript means creating a new object where all nested objects and arrays are also copied recursively,
 * ensuring that no references are shared with the original object. Modifications to the deep clone will NOT affect the original.
 */

const clone = (obj) => {
  //Base case: if it's not an object or is null, just return the value
  if (obj === null || typeof obj !== "object") return obj;
  //Handle Arrays seperately as we can just map them and create the deep clone that way.
  if (Array.isArray(ojb)) return obj.map(clone);

  const copy = {};
  for (const key in obj) {
    copy[key] = clone(obj[key]);
  }

  return copy;
};

/**
 * 4: We first check if the object passed in is actually a object, or exists, if its not we can't do much with it so we return it.
 * 5: Check if the passed object is an array, if it is we just return the object mapped back, this creates a deep clone
 * 7: If we have determined that the passed in value is a Object, we then treat is normally and just create a copy of it by parsing the original object
 *
 **/

//I'm more used to this route.

const originalObject = {
  a: 1,
  b: { c: 2 },
  d: [3, 4],
  e: function () {
    console.log("hello");
  }, // This will be lost
};

const deepClonedObject = JSON.parse(JSON.stringify(originalObject));

console.log(deepClonedObject.e); // Output: undefined

//Special note: the deepClonedOBject.e is undefiend because the JSON.stringify function can't serialize functions
