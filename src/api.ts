export const sumOfSquares = (n: number) => {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
};

export const squareOfSum = (n: number) => {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
};

export const calculateDifference = (n: number) => {
  return Math.abs(squareOfSum(n) - sumOfSquares(n));
};

export const getDifferenceOfSquares = (n: number) => {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        datetime: new Date(), //current date/time of this request,
        value: calculateDifference(n), // solution,
        number: n, // input number
        occurrences: '',  // the number of times input has been requested
        last_datetime: '', // last date/time of request for this input
      });
    } catch(err) {
      reject(Error(err))
    }
  });
};
