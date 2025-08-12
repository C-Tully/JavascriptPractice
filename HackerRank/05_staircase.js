/**
 * Staircase detail
 * This is a staircase of size :
 *      #
       ##
      ###
     ####
 */

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    console.log(`${output.padStart(n - i, " ")}` + output.padEnd(i, "#"));
  }
}
