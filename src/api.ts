import { memoCalculateDifference } from './utils/mockResults';
import { track } from './utils/helpers';

export const getDifferenceOfSquares = (n: number) => {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        datetime: new Date().toString(), //current date/time of this request,
        value: memoCalculateDifference(n), // solution,
        number: n, // input number
        occurrences: track.numberOfRequests(n),  // the number of times input has been requested
        last_datetime: track.dateTime(n), // last date/time of request for this input
      });
    } catch(err) {
      reject(Error(err))
    }
  });
};
