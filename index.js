var groupBy = (arr, fn) => arr.reduce((acc, c) => {let r = fn(c);if(!acc[r]){acc[r] = []};acc[r].push(c);return acc;}, {})
