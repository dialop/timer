

/*
**Goal**:
- implement an alarm clock/ timer which will beep after a specified amount of time has passed.
   The user can specify an unlimited number of alarms using command line arguments
**Plan**
- set process.argv() in order to use arguments in node
- set edge cases
- create a function that will play the beep
- Define a function that willplay the beep after x amount of time
- setTimeout()
*/

const arg = process.argv.slice(2);  //removing the first 2 command line arguments

// Function will play the beep sound
function runBeep() {
  process.stdout.write('\x07');
}

const setBeep = function(time) {
  if (!isNaN(time) && time >= 0) {
    return setTimeout(() => {
      runBeep();
      console.log('Beep!');
    }, time * 1000);
  }
};

// Edge Cases
// Edge Case: No numbers are provided
if (arg.length === 0) {
  console.log('Set a time values in seconds');
  return;
} else {

  for (let i = 0; i < arg.length; i++) {  //a foor loop that checks for the last 2 edge cases
    

    // Edge Case: An input is a negative number
    if (parseInt(arg[i]) < 0) {                        // parseInt function that converts a string to an integer
      console.log('Only positive number will be scheduled');
      return;
    }

    // Edge Case: An input is not a number
    if (isNaN(parseInt(arg[i]))) {
      console.log('Only numeric values will be scheduled');
      return;
    }

    setBeep(arg[i]);

  }

}

console.log(arg);