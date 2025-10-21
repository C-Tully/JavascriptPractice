//Goal: Fetch data from promisesData.json

// function fetchData() {
//   return fetch("data/promisesData.json")
//     .then((resp) => {
//       //inital network handling check
//       if (!resp.ok) {
//         throw new Error("Network response error.");
//       }
//       //Data successfuly fetched
//       return resp.json();
//     })
//     .then((data) => {
//       if (data.length > 0) {
//         console.log("Data!", data);
//         return data;
//       }
//     })
//     .catch((error) => {
//       //handle other error cases...
//       //Log error's handle if possible etc
//     });
// }

function fetchData() {
  return fetch()
    .then((resp) => {
      //Initial error checking first, did we get the response or an error?
      if (!resp.ok()) {
        throw new Error("Error::", resp.status);
      }

      return response.json();
    })
    .then((data) => {
      //Do something with data here
      const sortedData = data.map(
        (currentValue, index, arrayMapWasCalledOn) => {
          //do some cool stuff here.
        }
      );

      return sortedData;
    })
    .catch((error) => {
      console.error("Catch for any errors raised::", error);
    })
    .finally(() => {
      console.log(
        "This should be the last thing run, use the finally for cleanup, maybe triggering something afterwards like a loading flag..."
      );
    });
}

fetchData();
