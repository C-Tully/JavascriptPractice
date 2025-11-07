// The goal of this function is to have something
// that will take in any set of arguments, and effectively
// create something that will delay the process hence
// debounce.

function debounce(fn, delay) {
  let timeOut;
  // return the initial arguments as a function
  // this way were ensuring it'll get run
  return (...args) => {
    //Clear the timer out for each new usage
    clearTimeout(timer);

    //set timeOut
    timeOut = setTimeout(() => fn(...args), delay);
  };
}
