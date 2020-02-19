let numSimp = 0;


function getSimpleNum(n) {
  let count = 0;
  for (let i = 1; i<=n; i++) {
    if (n % i === 0) {
      count++;
    } 
  }
  if (count <= 2) {
    return 'Simple';
  } 
  return 'Not Simple';
}

console.log(getSimpleNum(numSimp));
