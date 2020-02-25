let numSimp = 20;


function getSimpleNum(numSimp) {
  let count = 0;
  for (let i = 1; i <= numSimp; i++) {
    if (numSimp % i === 0) {
      count++;
    }
  }
  if (count <= 2) {
    return 'Simple';
  }
  return 'Not Simple';
}

getSimpleNum(numSimp);