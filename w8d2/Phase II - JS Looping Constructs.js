function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let ele = array[i];
    if (ele % 3 === 0 || ele % 5 === 0) {
      result.push(ele);
    }
  }
  return result;
}

// console.log(fizzBuzz([3, 5, 15]));

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(15485863));
// console.log(isPrime(3548563));

function sumOfNPrimes(n) {
  let sum = 0;
  let count = 0;
  for (let i = 2; count < n; i++) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
  }
  return sum;
}
// console.log(sumOfNPrimes(0));
// console.log(sumOfNPrimes(1));
// console.log(sumOfNPrimes(4));
