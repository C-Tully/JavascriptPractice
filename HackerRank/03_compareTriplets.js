function compareTriplets(a, b) {
  // if (
  //   !(Array.isArray(a) && a.length === 3) &&
  //   !(Array.isArray(b) && b.length === 3)
  // )
  //   return;

  //nested loop for comparison
  // 0= alice
  // 1 = bob
  /**
     * a = [1, 2, 3]
       b = [3, 2, 1]

        For elements *0*, Bob is awarded a point because a[0] < b[0].
        For the equal elements a[1] and b[1], no points are earned.
        Finally, for elements 2, a[2] > b[2] so Alice receives a point.
        The return array is [1, 1] with Alice's score first and Bob's second.
     */
  const result = [0, 0];
  for (let i = 0; i <= 3; i++) {
    if (a[i] > b[i]) {
      result[0]++;
    } else if (a[i] < b[i]) {
      result[1]++;
    }
    // No points if equal
  }
  return result;
}
