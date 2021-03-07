function maxTrailing(levels) {
  const diffs = [];
  let max = 0;

  for (let i = 0; i < levels.length; i++) {
    diffs[i] = [];
    for (let j = 0; j < levels.length; j++) {
      if (j <= i) {
        diffs[i][j] = levels[i] - levels[j];
        if (diffs[i][j] > max) {
          max = diffs[i][j];
        }
      } else {
        diffs[i][j] = 0;
      }
    }
  }

  return max === 0 ? -1 : max;
}

function maxTrailing2(levels) {
  let min = levels[0];

  let max = 0;

  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > max) {
      max = levels[i] - levels[i - 1];
    }
    if (levels[i] > min) {
      swap(levels, i, i - 1);
    } else {
      min = levels[i];
    }
  }

  return max;
}

console.log(maxTrailing2([5, 3, 6, 7, 4]));
