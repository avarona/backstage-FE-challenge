const memoize = (func: (n: number) => void) => {
  let cache = {} as any;

  return (n: number) => {
    if(cache[n]) {
      console.log('Retrieve from Cache...');
      return cache[n];
    } else {
      console.log('Calculate result...');
      cache[n] = func(n);
      return cache[n];
    }
  }
}

const sumOfSquares = (n: number) => {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
};

const squareOfSum = (n: number) => {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
};

const calculateDifference = (n: number) => {
  return Math.abs(squareOfSum(n) - sumOfSquares(n));
};

const memoCalculateDifference = memoize(calculateDifference);

export const getDifferenceOfSquares = (n: number) => {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        datetime: new Date().toString(), //current date/time of this request,
        value: memoCalculateDifference(n), // solution,
        number: n, // input number
        occurrences: '',  // the number of times input has been requested
        last_datetime: '', // last date/time of request for this input
      });
    } catch(err) {
      reject(Error(err))
    }
  });
};
