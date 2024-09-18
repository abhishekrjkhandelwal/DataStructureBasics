const nemo = ['nemo'];
const everyone = ['Abhishek', 'gupta', 'abhinav', 'abhiraj', 'Abhishek', 'gupta', 'abhinav', 'abhiraj','Abhishek', 'gupta', 'abhinav', 'abhiraj','Abhishek', 'gupta', 'abhinav', 'abhiraj']

const large = new Array(100000000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
//      console.log('Found NEMO!');
    }
  }

  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + ' miliseconds')
}


findNemo(large) // O(n) -> Linear Time

// If N = 10 => 0.0024399999999999977 miliseconds
// If N = 100 => 0.024038000000000892 miliseconds
// If N = 1000 => 0.03499400000000108 miliseconds
// If N = 10000 => 0.3371769999999987 miliseconds
// If N = 100000 => 1.3631799999999998 miliseconds
// If N = 1000000 => 2.8773170000000015 miliseconds
// If N = 10000000 => 13.926594000000001 miliseconds