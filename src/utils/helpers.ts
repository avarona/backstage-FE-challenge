export const memoize = (func: (n: number) => void) => {
  let cache = {} as any;

  return (n: number) => {
    if(cache[n]) {
      console.log('Value from cache');
      return cache[n];
    } else {
      console.log('Calculated value');
      cache[n] = func(n);
      return cache[n];
    }
  }
};

type TrackingCache = {
  [n: number]: {
    occurences?: number;
    lastTimestamp?: string;
  }
}

export const track = (() => {
  let cache = {} as TrackingCache;

  return {
    numberOfRequests: (n: number) => {
      if(cache[n]) {
        cache[n].occurences! += 1;
      } else {
        cache[n] = { occurences: 1 }
      }
      return cache[n].occurences;
    },

    dateTime: (n: number) => {
      const date = new Date().toString();
      const temp = cache[n].lastTimestamp || date;

      cache[n].lastTimestamp = date;

      return temp;
    }
  }
})();
